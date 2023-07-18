package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PolicyException.eti;PolicyException.eix;PolicyException.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface PolicyExceptionInternal extends com.guidewire._generated.entity.VersionableInternal, com.guidewire._generated.entity.ExtractableInternal, com.guidewire._generated.entity.FrozenSetMemberInternal, gw.pc.policy.period.entity.PolicyException {
  /**
   * Gets the value of the ExCheckTime field.
   * The last time at which policy exception rules were run on the PolicyPeriod.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getExCheckTime();
  
  
  /**
   * Gets the value of the PolicyPeriod field.
   * A foreign key to the PolicyPeriod.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyPeriod getPolicyPeriod();
  
  
  public gw.pl.persistence.core.Key getPolicyPeriodID();
  
  
  /**
   * Sets the value of the ExCheckTime field.
   */
  public void setExCheckTime(java.util.Date value);
  
  
  /**
   * Sets the value of the PolicyPeriod field.
   */
  public void setPolicyPeriod(entity.PolicyPeriod value);
  
  
  public void setPolicyPeriodID(gw.pl.persistence.core.Key value);
  
  
  
}