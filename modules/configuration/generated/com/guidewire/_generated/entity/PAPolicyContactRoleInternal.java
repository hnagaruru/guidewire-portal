package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PAPolicyContactRole.eti;PAPolicyContactRole.eix;PAPolicyContactRole.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface PAPolicyContactRoleInternal extends com.guidewire._generated.entity.PolicyContactRoleInternal {
  /**
   * Gets the value of the PersonalAutoLine field.
   * The Personal Auto policy line this contact role is associated with.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PersonalAutoLine getPersonalAutoLine();
  
  
  public gw.pl.persistence.core.Key getPersonalAutoLineID();
  
  
  /**
   * Sets the value of the PersonalAutoLine field.
   */
  public void setPersonalAutoLine(entity.PersonalAutoLine value);
  
  
  public void setPersonalAutoLineID(gw.pl.persistence.core.Key value);
  
  
  
}