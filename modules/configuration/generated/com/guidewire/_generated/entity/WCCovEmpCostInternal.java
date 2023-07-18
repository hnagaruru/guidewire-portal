package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "WCCovEmpCost.eti;WCCovEmpCost.eix;WCCovEmpCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface WCCovEmpCostInternal extends com.guidewire._generated.entity.WCCostInternal, com.guidewire._generated.entity.CostInternal, gw.api.domain.financials.CostAdapter {
  /**
   * Gets the value of the WCCoveredEmployee field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.WCCoveredEmployee getWCCoveredEmployee();
  
  
  public gw.pl.persistence.core.Key getWCCoveredEmployeeID();
  
  
  /**
   * Gets the value of the WorkersCompCov field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.WorkersCompCov getWorkersCompCov();
  
  
  public gw.pl.persistence.core.Key getWorkersCompCovID();
  
  
  /**
   * Sets the value of the WCCoveredEmployee field.
   */
  public void setWCCoveredEmployee(entity.WCCoveredEmployee value);
  
  
  public void setWCCoveredEmployeeID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the WorkersCompCov field.
   */
  public void setWorkersCompCov(entity.WorkersCompCov value);
  
  
  public void setWorkersCompCovID(gw.pl.persistence.core.Key value);
  
  
  
}