package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "CPPolicyContactRole.eti;CPPolicyContactRole.eix;CPPolicyContactRole.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface CPPolicyContactRoleInternal extends com.guidewire._generated.entity.PolicyContactRoleInternal {
  /**
   * Gets the value of the CommercialPropertyLine field.
   * The Commercial Property policy line this contact role is associated with.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.CommercialPropertyLine getCommercialPropertyLine();
  
  
  public gw.pl.persistence.core.Key getCommercialPropertyLineID();
  
  
  /**
   * Sets the value of the CommercialPropertyLine field.
   */
  public void setCommercialPropertyLine(entity.CommercialPropertyLine value);
  
  
  public void setCommercialPropertyLineID(gw.pl.persistence.core.Key value);
  
  
  
}