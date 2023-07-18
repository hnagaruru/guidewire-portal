package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "IMAccountsRecPartCovCost.eti;IMAccountsRecPartCovCost.eix;IMAccountsRecPartCovCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface IMAccountsRecPartCovCostInternal extends com.guidewire._generated.entity.IMAccountsRecPartCostInternal, com.guidewire._generated.entity.CostInternal, gw.api.domain.financials.CostAdapter {
  /**
   * Gets the value of the IMAccountsRecPartCov field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.IMAccountsRecPartCov getIMAccountsRecPartCov();
  
  
  public gw.pl.persistence.core.Key getIMAccountsRecPartCovID();
  
  
  /**
   * Sets the value of the IMAccountsRecPartCov field.
   */
  public void setIMAccountsRecPartCov(entity.IMAccountsRecPartCov value);
  
  
  public void setIMAccountsRecPartCovID(gw.pl.persistence.core.Key value);
  
  
  
}