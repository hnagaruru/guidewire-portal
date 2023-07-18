package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "WCRatingStepExt.eti;WCRatingStepExt.eix;WCRatingStepExt.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface WCRatingStepExtInternal extends com.guidewire._generated.entity.KeyableBeanInternal {
  /**
   * Gets the value of the aggCostType field.
   * Indicates the type of aggregate cost (not specific to a single location/class code exposure unit) to be used for the resulting costs, if any.  Should be non-null unless this row is not expected to result in a new cost (e.g. just stores a sub-total).
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.WCJurisdictionCostType getaggCostType();
  
  
  /**
   * Gets the value of the amountType field.
   * Indicates the type (standard vs non-standard premium or taxes/surcharges) of the amount calculated, if any.  Should be non-null unless this row is not expected to result in a new rating line (e.g. just stores a sub-total).
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.RateAmountType getamountType();
  
  
  /**
   * Gets the value of the calcOrder field.
   * Determines the order in which the steps should be executed.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getcalcOrder();
  
  
  /**
   * Gets the value of the classcode field.
   * Indicates the class code that should be used for the resulting premiums, if any.  Should be non-null unless this row is not expected to result in a new rating line (e.g. just stores a sub-total).
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getclasscode();
  
  
  /**
   * Gets the value of the customAction field.
   * If stepAction is Custom, then this indicates which custom action to execute.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getcustomAction();
  
  
  /**
   * Gets the value of the description field.
   * If non-null, this description will be used instead of that of the AggRatingLineType for describing the resulting premiums.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getdescription();
  
  
  /**
   * Gets the value of the effDate field.
   * The date on which this factor becomes effective (inclusive).  A null date means this has always been effective.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date geteffDate();
  
  
  /**
   * Gets the value of the expDate field.
   * The date on which this factor expires (exclusive).  A null date means this will always be effective.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getexpDate();
  
  
  /**
   * Gets the value of the factorName field.
   * This field should match the factorName for the correct factor in RateAdjFactor.  Used for taxes and fees.  Also used if the modifier is a boolean type because, if true, the system needs to look up the rate to apply.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getfactorName();
  
  
  /**
   * Gets the value of the modifierID field.
   * Should match the modifier pattern's public ID.  If stepAction is Modifier, then this should be non-null to indicate which modifier to look-up for the calculation.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getmodifierID();
  
  
  /**
   * Gets the value of the rateConversionType field.
   * If step action looks up a rate and uses it to calculate a new amount, then this field defines how the rate should be interpreted.  (See typelist for a description of options.)
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.RateConversionType getrateConversionType();
  
  
  /**
   * Gets the value of the rateState field.
   * Indicates a row is applicable to a given jurisdiction.  Null indicates a default row which is applicable to all jurisdictions which have no jurisdiction-specific rows for the given effective date. This should be the string value of a typecode in the Jurisdiction typelist. For example, if this is a typecode allowed in the US state of California, the value should be 'CA'. 
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getrateState();
  
  
  /**
   * Gets the value of the stepAction field.
   * Explains what action should be taken for this step.  Some steps reuse generic actions and others require a Custom action.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.WCRateStepAction getstepAction();
  
  
  /**
   * Gets the value of the subtotal field.
   * If step action is Subtotal, then this defines which subtotal to calc and store.  Other step actions also optionally use this to lookup a previously saved subtotal as the basis for the step's calculation.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.RateSubtotalType getsubtotal();
  
  
  /**
   * Gets the value of the includeInReports field.
   * Indicates whether or not this rating step should be performed for premium report jobs
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isincludeInReports();
  
  
  /**
   * Sets the value of the aggCostType field.
   */
  public void setaggCostType(typekey.WCJurisdictionCostType value);
  
  
  /**
   * Sets the value of the amountType field.
   */
  public void setamountType(typekey.RateAmountType value);
  
  
  /**
   * Sets the value of the calcOrder field.
   */
  public void setcalcOrder(java.lang.Integer value);
  
  
  /**
   * Sets the value of the classcode field.
   */
  public void setclasscode(java.lang.String value);
  
  
  /**
   * Sets the value of the customAction field.
   */
  public void setcustomAction(java.lang.String value);
  
  
  /**
   * Sets the value of the description field.
   */
  public void setdescription(java.lang.String value);
  
  
  /**
   * Sets the value of the effDate field.
   */
  public void seteffDate(java.util.Date value);
  
  
  /**
   * Sets the value of the expDate field.
   */
  public void setexpDate(java.util.Date value);
  
  
  /**
   * Sets the value of the factorName field.
   */
  public void setfactorName(java.lang.String value);
  
  
  /**
   * Sets the value of the includeInReports field.
   */
  public void setincludeInReports(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the modifierID field.
   */
  public void setmodifierID(java.lang.String value);
  
  
  /**
   * Sets the value of the rateConversionType field.
   */
  public void setrateConversionType(typekey.RateConversionType value);
  
  
  /**
   * Sets the value of the rateState field.
   */
  public void setrateState(java.lang.String value);
  
  
  /**
   * Sets the value of the stepAction field.
   */
  public void setstepAction(typekey.WCRateStepAction value);
  
  
  /**
   * Sets the value of the subtotal field.
   */
  public void setsubtotal(typekey.RateSubtotalType value);
  
  
  
}