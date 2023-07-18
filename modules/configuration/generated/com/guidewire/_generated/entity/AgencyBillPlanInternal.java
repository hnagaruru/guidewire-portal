package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "AgencyBillPlan.eti;AgencyBillPlan.eix;AgencyBillPlan.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface AgencyBillPlanInternal extends com.guidewire._generated.entity.VersionableInternal {
  /**
   * Gets the value of the Currency field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Currency getCurrency();
  
  
  /**
   * Gets the value of the Organization field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Organization getOrganization();
  
  
  public gw.pl.persistence.core.Key getOrganizationID();
  
  
  /**
   * Gets the value of the PlanID field.
   * The public id of the agency bill plan in billing system
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPlanID();
  
  
  /**
   * Sets the value of the Currency field.
   */
  public void setCurrency(typekey.Currency value);
  
  
  /**
   * Sets the value of the Organization field.
   */
  public void setOrganization(entity.Organization value);
  
  
  public void setOrganizationID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the PlanID field.
   */
  public void setPlanID(java.lang.String value);
  
  
  
}