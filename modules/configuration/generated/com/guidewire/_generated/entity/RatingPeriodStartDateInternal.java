package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "RatingPeriodStartDate.eti;RatingPeriodStartDate.eix;RatingPeriodStartDate.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface RatingPeriodStartDateInternal extends com.guidewire._generated.entity.EffDatedInternal {
  /**
   * Gets the value of the BasedOnValue field.
   * Link to the row on which this row is based; or null if new to branch
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.RatingPeriodStartDate getBasedOnValue();
  
  
  public gw.pl.persistence.core.Key getBasedOnValueID();
  
  
  /**
   * Gets the value of the BranchValue field.
   * Link to root of effdated tree
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyPeriod getBranchValue();
  
  
  public gw.pl.persistence.core.Key getBranchValueID();
  
  
  /**
   * Gets the value of the Fixed field.
   * Unique ID for this 'object' across all branches and periods
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.RatingPeriodStartDate getFixed();
  
  
  public gw.pl.persistence.core.Key getFixedID();
  
  
  /**
   * Gets the value of the StartDate field.
   * Date this rating period takes effect.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getStartDate();
  
  
  /**
   * Gets the value of the Type field.
   * The type of RPSD (anniversary date, forced re-rate, etc)
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.RPSDType getType();
  
  
  /**
   * Gets the value of the WCJurisdiction field.
   * The jurisdiction to which this rating period belongs.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.WCJurisdiction getWCJurisdiction();
  
  
  public gw.pl.persistence.core.Key getWCJurisdictionID();
  
  
  /**
   * Sets the value of the BasedOnValue field.
   */
  public void setBasedOnValue(entity.RatingPeriodStartDate value);
  
  
  public void setBasedOnValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the BranchValue field.
   */
  public void setBranchValue(entity.PolicyPeriod value);
  
  
  public void setBranchValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Fixed field.
   */
  public void setFixed(entity.RatingPeriodStartDate value);
  
  
  public void setFixedID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the StartDate field.
   */
  public void setStartDate(java.util.Date value);
  
  
  /**
   * Sets the value of the Type field.
   */
  public void setType(typekey.RPSDType value);
  
  
  /**
   * Sets the value of the WCJurisdiction field.
   */
  public void setWCJurisdiction(entity.WCJurisdiction value);
  
  
  public void setWCJurisdictionID(gw.pl.persistence.core.Key value);
  
  
  
}