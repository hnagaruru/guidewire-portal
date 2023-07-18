package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "IMAccountsRecCovCost.eti;IMAccountsRecCovCost.eix;IMAccountsRecCovCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface IMAccountsRecCovCostInternal extends com.guidewire._generated.entity.IMAccountsRecPartCostInternal, com.guidewire._generated.entity.CostInternal, gw.api.domain.financials.CostAdapter {
  /**
   * Gets the value of the IMAccountsRecCov field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.IMAccountsRecCov getIMAccountsRecCov();
  
  
  public gw.pl.persistence.core.Key getIMAccountsRecCovID();
  
  
  /**
   * Sets the value of the IMAccountsRecCov field.
   */
  public void setIMAccountsRecCov(entity.IMAccountsRecCov value);
  
  
  public void setIMAccountsRecCovID(gw.pl.persistence.core.Key value);
  
  
  
}