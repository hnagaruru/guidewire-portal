package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "APDRiskScheduleItem.eti;APDRiskScheduleItem.eix;APDRiskScheduleItem.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface APDRiskScheduleItemInternal extends com.guidewire._generated.entity.EffDatedInternal {
  /**
   * Adds the given element to the ItemTerms array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToItemTerms(entity.APDRiskScheduleTerm element);
  
  
  /**
   * Gets the value of the BasedOnValue field.
   * Link to the row on which this row is based; or null if new to branch
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDRiskScheduleItem getBasedOnValue();
  
  
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
  public entity.APDRiskScheduleItem getFixed();
  
  
  public gw.pl.persistence.core.Key getFixedID();
  
  
  /**
   * Gets the value of the ItemTerms field.
   * The terms that belong to this schedule item
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDRiskScheduleTerm[] getItemTerms();
  
  
  /**
   * Gets the value of the RiskClause field.
   * The clause that this field qualifies
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDRiskClause getRiskClause();
  
  
  public gw.pl.persistence.core.Key getRiskClauseID();
  
  
  /**
   * Removes the given element from the ItemTerms array. This is achieved by marking the element for removal.
   */
  public void removeFromItemTerms(entity.APDRiskScheduleTerm element);
  
  
  /**
   * Removes the given element from the ItemTerms array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromItemTerms(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the BasedOnValue field.
   */
  public void setBasedOnValue(entity.APDRiskScheduleItem value);
  
  
  public void setBasedOnValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the BranchValue field.
   */
  public void setBranchValue(entity.PolicyPeriod value);
  
  
  public void setBranchValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Fixed field.
   */
  public void setFixed(entity.APDRiskScheduleItem value);
  
  
  public void setFixedID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the ItemTerms field.
   */
  public void setItemTerms(entity.APDRiskScheduleTerm[] value);
  
  
  /**
   * Sets the value of the RiskClause field.
   */
  public void setRiskClause(entity.APDRiskClause value);
  
  
  public void setRiskClauseID(gw.pl.persistence.core.Key value);
  
  
  
}