package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "WCRetrospectiveRatingPlan.eti;WCRetrospectiveRatingPlan.eix;WCRetrospectiveRatingPlan.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface WCRetrospectiveRatingPlanInternal extends com.guidewire._generated.entity.EffDatedInternal, gw.api.copier.EffDatedCopyable, gw.api.logicalmatch.EffDatedLogicalMatcher {
  /**
   * Adds the given element to the LettersOfCredit array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToLettersOfCredit(entity.WCRetroRatingLetterOfCredit element);
  
  
  /**
   * Adds the given element to the StateMultipliers array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToStateMultipliers(entity.WCStateMultiplier element);
  
  
  /**
   * Gets the value of the BasedOnValue field.
   * Link to the row on which this row is based; or null if new to branch
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.WCRetrospectiveRatingPlan getBasedOnValue();
  
  
  public gw.pl.persistence.core.Key getBasedOnValueID();
  
  
  /**
   * Gets the value of the BasicPremiumFactor1 field.
   * The (50%) premium factor
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getBasicPremiumFactor1();
  
  
  /**
   * Gets the value of the BasicPremiumFactor2 field.
   * The (100%) premium factor
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getBasicPremiumFactor2();
  
  
  /**
   * Gets the value of the BasicPremiumFactor3 field.
   * The (150%) premium factor
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getBasicPremiumFactor3();
  
  
  /**
   * Gets the value of the BranchValue field.
   * Link to root of effdated tree
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyPeriod getBranchValue();
  
  
  public gw.pl.persistence.core.Key getBranchValueID();
  
  
  /**
   * Gets the value of the ComputationInterval field.
   * The computation interval
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getComputationInterval();
  
  
  /**
   * Gets the value of the EstimatedStandardPremium field.
   * The estimated standard premium
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.currency.MonetaryAmount getEstimatedStandardPremium();
  
  
  /**
   * Gets the value of the EstimatedStandardPremium_amt field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getEstimatedStandardPremium_amt();
  
  
  /**
   * Gets the value of the EstimatedStandardPremium_cur field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Currency getEstimatedStandardPremium_cur();
  
  
  /**
   * Gets the value of the FirstComputationDate field.
   * The data of the first computation
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getFirstComputationDate();
  
  
  /**
   * Gets the value of the Fixed field.
   * Unique ID for this 'object' across all branches and periods
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.WCRetrospectiveRatingPlan getFixed();
  
  
  public gw.pl.persistence.core.Key getFixedID();
  
  
  /**
   * Gets the value of the LastComputationDate field.
   * The data of the last computation
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getLastComputationDate();
  
  
  /**
   * Gets the value of the LettersOfCredit field.
   * The list of Letters Of Credit
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.WCRetroRatingLetterOfCredit[] getLettersOfCredit();
  
  
  /**
   * Gets the value of the LossConversionFactor field.
   * Loss Conversion Factor
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getLossConversionFactor();
  
  
  /**
   * Gets the value of the LossLimitAmount field.
   * Loss limitation amount
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.currency.MonetaryAmount getLossLimitAmount();
  
  
  /**
   * Gets the value of the LossLimitAmount_amt field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getLossLimitAmount_amt();
  
  
  /**
   * Gets the value of the LossLimitAmount_cur field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Currency getLossLimitAmount_cur();
  
  
  /**
   * Gets the value of the MaxRetroPremiumRatio field.
   * The maximum retro premium ratio
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getMaxRetroPremiumRatio();
  
  
  /**
   * Gets the value of the MinRetroPremiumRatio field.
   * The minimum retro premium ratio
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getMinRetroPremiumRatio();
  
  
  /**
   * Gets the value of the PercentStandardPremium1 field.
   * The (50%) standard premium
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getPercentStandardPremium1();
  
  
  /**
   * Gets the value of the PercentStandardPremium2 field.
   * The (100%) standard premium
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getPercentStandardPremium2();
  
  
  /**
   * Gets the value of the PercentStandardPremium3 field.
   * The (150%) standard premium
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getPercentStandardPremium3();
  
  
  /**
   * Gets the value of the StateMultipliers field.
   * The list of Multipliers by State
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.WCStateMultiplier[] getStateMultipliers();
  
  
  /**
   * Gets the value of the WorkersCompLine field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.WorkersCompLine getWorkersCompLine();
  
  
  public gw.pl.persistence.core.Key getWorkersCompLineID();
  
  
  /**
   * Gets the value of the IncludeALAE field.
   * Include ALocated Loss Adjustment
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isIncludeALAE();
  
  
  /**
   * Removes the given element from the LettersOfCredit array. This is achieved by marking the element for removal.
   */
  public void removeFromLettersOfCredit(entity.WCRetroRatingLetterOfCredit element);
  
  
  /**
   * Removes the given element from the LettersOfCredit array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromLettersOfCredit(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the StateMultipliers array. This is achieved by marking the element for removal.
   */
  public void removeFromStateMultipliers(entity.WCStateMultiplier element);
  
  
  /**
   * Removes the given element from the StateMultipliers array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromStateMultipliers(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the BasedOnValue field.
   */
  public void setBasedOnValue(entity.WCRetrospectiveRatingPlan value);
  
  
  public void setBasedOnValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the BasicPremiumFactor1 field.
   */
  public void setBasicPremiumFactor1(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the BasicPremiumFactor2 field.
   */
  public void setBasicPremiumFactor2(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the BasicPremiumFactor3 field.
   */
  public void setBasicPremiumFactor3(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the BranchValue field.
   */
  public void setBranchValue(entity.PolicyPeriod value);
  
  
  public void setBranchValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the ComputationInterval field.
   */
  public void setComputationInterval(java.lang.Integer value);
  
  
  /**
   * Sets the value of the EstimatedStandardPremium field.
   */
  public void setEstimatedStandardPremium(gw.pl.currency.MonetaryAmount value);
  
  
  /**
   * Sets the value of the EstimatedStandardPremium_amt field.
   */
  public void setEstimatedStandardPremium_amt(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the EstimatedStandardPremium_cur field.
   */
  public void setEstimatedStandardPremium_cur(typekey.Currency value);
  
  
  /**
   * Sets the value of the FirstComputationDate field.
   */
  public void setFirstComputationDate(java.util.Date value);
  
  
  /**
   * Sets the value of the Fixed field.
   */
  public void setFixed(entity.WCRetrospectiveRatingPlan value);
  
  
  public void setFixedID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the IncludeALAE field.
   */
  public void setIncludeALAE(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the LastComputationDate field.
   */
  public void setLastComputationDate(java.util.Date value);
  
  
  /**
   * Sets the value of the LettersOfCredit field.
   */
  public void setLettersOfCredit(entity.WCRetroRatingLetterOfCredit[] value);
  
  
  /**
   * Sets the value of the LossConversionFactor field.
   */
  public void setLossConversionFactor(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the LossLimitAmount field.
   */
  public void setLossLimitAmount(gw.pl.currency.MonetaryAmount value);
  
  
  /**
   * Sets the value of the LossLimitAmount_amt field.
   */
  public void setLossLimitAmount_amt(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the LossLimitAmount_cur field.
   */
  public void setLossLimitAmount_cur(typekey.Currency value);
  
  
  /**
   * Sets the value of the MaxRetroPremiumRatio field.
   */
  public void setMaxRetroPremiumRatio(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the MinRetroPremiumRatio field.
   */
  public void setMinRetroPremiumRatio(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the PercentStandardPremium1 field.
   */
  public void setPercentStandardPremium1(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the PercentStandardPremium2 field.
   */
  public void setPercentStandardPremium2(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the PercentStandardPremium3 field.
   */
  public void setPercentStandardPremium3(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the StateMultipliers field.
   */
  public void setStateMultipliers(entity.WCStateMultiplier[] value);
  
  
  /**
   * Sets the value of the WorkersCompLine field.
   */
  public void setWorkersCompLine(entity.WorkersCompLine value);
  
  
  public void setWorkersCompLineID(gw.pl.persistence.core.Key value);
  
  
  
}