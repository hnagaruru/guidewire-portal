package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "BAPolicyContactRole.eti;BAPolicyContactRole.eix;BAPolicyContactRole.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface BAPolicyContactRoleInternal extends com.guidewire._generated.entity.PolicyContactRoleInternal {
  /**
   * Gets the value of the BusinessAutoLine field.
   * The Commercial Auto policy line this contact role is associated with.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.BusinessAutoLine getBusinessAutoLine();
  
  
  public gw.pl.persistence.core.Key getBusinessAutoLineID();
  
  
  /**
   * Sets the value of the BusinessAutoLine field.
   */
  public void setBusinessAutoLine(entity.BusinessAutoLine value);
  
  
  public void setBusinessAutoLineID(gw.pl.persistence.core.Key value);
  
  
  
}