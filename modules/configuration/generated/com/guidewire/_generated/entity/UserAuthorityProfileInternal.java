package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "UserAuthorityProfile.eti;UserAuthorityProfile.eix;UserAuthorityProfile.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface UserAuthorityProfileInternal extends com.guidewire._generated.entity.VersionableInternal {
  /**
   * Gets the value of the UWAuthorityProfile field.
   * The associated authority profile
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.UWAuthorityProfile getUWAuthorityProfile();
  
  
  public gw.pl.persistence.core.Key getUWAuthorityProfileID();
  
  
  /**
   * Gets the value of the User field.
   * The associated User.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.User getUser();
  
  
  public gw.pl.persistence.core.Key getUserID();
  
  
  /**
   * Sets the value of the UWAuthorityProfile field.
   */
  public void setUWAuthorityProfile(entity.UWAuthorityProfile value);
  
  
  public void setUWAuthorityProfileID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the User field.
   */
  public void setUser(entity.User value);
  
  
  public void setUserID(gw.pl.persistence.core.Key value);
  
  
  
}