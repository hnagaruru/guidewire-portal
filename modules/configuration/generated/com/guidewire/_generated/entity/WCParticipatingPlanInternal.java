package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "WCParticipatingPlan.eti;WCParticipatingPlan.eix;WCParticipatingPlan.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface WCParticipatingPlanInternal extends com.guidewire._generated.entity.EffDatedInternal, gw.api.copier.EffDatedCopyable, gw.api.logicalmatch.EffDatedLogicalMatcher {
  /**
   * Gets the value of the BasedOnValue field.
   * Link to the row on which this row is based; or null if new to branch
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.WCParticipatingPlan getBasedOnValue();
  
  
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
  public entity.WCParticipatingPlan getFixed();
  
  
  public gw.pl.persistence.core.Key getFixedID();
  
  
  /**
   * Gets the value of the LossConversionFactor field.
   * Loss Conversion Factor
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getLossConversionFactor();
  
  
  /**
   * Gets the value of the PlanID field.
   * The ID of this participating plan
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.WCParticipatingPlanID getPlanID();
  
  
  /**
   * Gets the value of the Retention field.
   * The retention amount (percent)
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getRetention();
  
  
  /**
   * Gets the value of the WorkersCompLine field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.WorkersCompLine getWorkersCompLine();
  
  
  public gw.pl.persistence.core.Key getWorkersCompLineID();
  
  
  /**
   * Sets the value of the BasedOnValue field.
   */
  public void setBasedOnValue(entity.WCParticipatingPlan value);
  
  
  public void setBasedOnValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the BranchValue field.
   */
  public void setBranchValue(entity.PolicyPeriod value);
  
  
  public void setBranchValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Fixed field.
   */
  public void setFixed(entity.WCParticipatingPlan value);
  
  
  public void setFixedID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the LossConversionFactor field.
   */
  public void setLossConversionFactor(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the PlanID field.
   */
  public void setPlanID(typekey.WCParticipatingPlanID value);
  
  
  /**
   * Sets the value of the Retention field.
   */
  public void setRetention(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the WorkersCompLine field.
   */
  public void setWorkersCompLine(entity.WorkersCompLine value);
  
  
  public void setWorkersCompLineID(gw.pl.persistence.core.Key value);
  
  
  
}