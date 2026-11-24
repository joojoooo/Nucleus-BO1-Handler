#include maps\mp\_utility;
#include common_scripts\utility;

init()
{
	if ( GetDvarInt( "scr_disablePlutoniumFixes" ) )
	{
		return;
	}
	
	level thread on_player_connect();
}

on_player_connect()
{
	for ( ;; )
	{
		level waittill( "connected", player );
		player thread player_connected();
	}
}

player_connected()
{
	self endon( "disconnect" );
	
	if ( isDedicated() )
	{
		if ( !self istestclient() && !self isdemoclient() )
		{
			self thread fix_godmode_class_exploit();
		}
	}
}

fix_godmode_class_exploit()
{
	self endon( "disconnect" );
	
	this_class = "";
	
	for ( ;; )
	{
		wait 0.05;
		
		if ( !isDefined( self.class ) )
		{
			continue;
		}
		
		if ( this_class == self.class )
		{
			continue;
		}
		
		this_class = self.class;
		
		needle = "CLASS_CUSTOM";
		
		if ( getsubstr( self.class, 0, needle.size ) != needle )
		{
			continue;
		}
		
		class_num = int( getsubstr( self.class, needle.size, self.class.size ) ) - 1;
		
		if ( isDefined( level.cac_functions["set_body_model"][self.custom_class[class_num]["body"]] ) )
		{
			continue;
		}
		
		kick( self getentitynumber(), "PATCH_BAD_STATS" );
	}
}
