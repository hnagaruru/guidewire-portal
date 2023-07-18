package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "RIPolicyPeriodCedingWorkItem.eti;RIPolicyPeriodCedingWorkItem.eix;RIPolicyPeriodCedingWorkItem.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface RIPolicyPeriodCedingWorkItemInternal extends com.guidewire._generated.entity.RICedingWorkItemInternal {
  /**
   * Gets the value of the PolicyPeriod field.
   * PolicyPeriod to calculate ceding against.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyPeriod getPolicyPeriod();
  
  
  public gw.pl.persistence.core.Key getPolicyPeriodID();
  
  
  /**
   * Sets the value of the PolicyPeriod field.
   */
  public void setPolicyPeriod(entity.PolicyPeriod value);
  
  
  public void setPolicyPeriodID(gw.pl.persistence.core.Key value);
  
  
  
}