package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "BOPPolicyContactRole.eti;BOPPolicyContactRole.eix;BOPPolicyContactRole.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface BOPPolicyContactRoleInternal extends com.guidewire._generated.entity.PolicyContactRoleInternal {
  /**
   * Gets the value of the BusinessOwnersLine field.
   * The Business Owners policy line this contact role is associated with.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.BusinessOwnersLine getBusinessOwnersLine();
  
  
  public gw.pl.persistence.core.Key getBusinessOwnersLineID();
  
  
  /**
   * Sets the value of the BusinessOwnersLine field.
   */
  public void setBusinessOwnersLine(entity.BusinessOwnersLine value);
  
  
  public void setBusinessOwnersLineID(gw.pl.persistence.core.Key value);
  
  
  
}