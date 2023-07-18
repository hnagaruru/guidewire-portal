package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "WCRetroRatingLetterOfCredit.eti;WCRetroRatingLetterOfCredit.eix;WCRetroRatingLetterOfCredit.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface WCRetroRatingLetterOfCreditInternal extends com.guidewire._generated.entity.EffDatedInternal {
  /**
   * Gets the value of the Amount field.
   * The amount this letter is providing
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.currency.MonetaryAmount getAmount();
  
  
  /**
   * Gets the value of the Amount_amt field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getAmount_amt();
  
  
  /**
   * Gets the value of the Amount_cur field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Currency getAmount_cur();
  
  
  /**
   * Gets the value of the BasedOnValue field.
   * Link to the row on which this row is based; or null if new to branch
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.WCRetroRatingLetterOfCredit getBasedOnValue();
  
  
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
  public entity.WCRetroRatingLetterOfCredit getFixed();
  
  
  public gw.pl.persistence.core.Key getFixedID();
  
  
  /**
   * Gets the value of the IssuerName field.
   * The name of the issuer
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getIssuerName();
  
  
  /**
   * Gets the value of the ValidFrom field.
   * Date (inclusive) from which this letter of credit is valid.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getValidFrom();
  
  
  /**
   * Gets the value of the ValidTo field.
   * Date (exclusive) at which this letter of credit is no longer valid.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getValidTo();
  
  
  /**
   * Gets the value of the WCRetrospectiveRatingPlan field.
   * The retro plan for which this letter applies
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.WCRetrospectiveRatingPlan getWCRetrospectiveRatingPlan();
  
  
  public gw.pl.persistence.core.Key getWCRetrospectiveRatingPlanID();
  
  
  /**
   * Sets the value of the Amount field.
   */
  public void setAmount(gw.pl.currency.MonetaryAmount value);
  
  
  /**
   * Sets the value of the Amount_amt field.
   */
  public void setAmount_amt(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the Amount_cur field.
   */
  public void setAmount_cur(typekey.Currency value);
  
  
  /**
   * Sets the value of the BasedOnValue field.
   */
  public void setBasedOnValue(entity.WCRetroRatingLetterOfCredit value);
  
  
  public void setBasedOnValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the BranchValue field.
   */
  public void setBranchValue(entity.PolicyPeriod value);
  
  
  public void setBranchValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Fixed field.
   */
  public void setFixed(entity.WCRetroRatingLetterOfCredit value);
  
  
  public void setFixedID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the IssuerName field.
   */
  public void setIssuerName(java.lang.String value);
  
  
  /**
   * Sets the value of the ValidFrom field.
   */
  public void setValidFrom(java.util.Date value);
  
  
  /**
   * Sets the value of the ValidTo field.
   */
  public void setValidTo(java.util.Date value);
  
  
  /**
   * Sets the value of the WCRetrospectiveRatingPlan field.
   */
  public void setWCRetrospectiveRatingPlan(entity.WCRetrospectiveRatingPlan value);
  
  
  public void setWCRetrospectiveRatingPlanID(gw.pl.persistence.core.Key value);
  
  
  
}