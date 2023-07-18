package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GLPolicyContactRole.eti;GLPolicyContactRole.eix;GLPolicyContactRole.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface GLPolicyContactRoleInternal extends com.guidewire._generated.entity.PolicyContactRoleInternal {
  /**
   * Gets the value of the GeneralLiabilityLine field.
   * The General Liability policy line this contact role is associated with.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GeneralLiabilityLine getGeneralLiabilityLine();
  
  
  public gw.pl.persistence.core.Key getGeneralLiabilityLineID();
  
  
  /**
   * Sets the value of the GeneralLiabilityLine field.
   */
  public void setGeneralLiabilityLine(entity.GeneralLiabilityLine value);
  
  
  public void setGeneralLiabilityLineID(gw.pl.persistence.core.Key value);
  
  
  
}