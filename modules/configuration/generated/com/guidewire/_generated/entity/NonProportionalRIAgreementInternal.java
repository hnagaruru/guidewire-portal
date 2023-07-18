package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "NonProportionalRIAgreement.eti;NonProportionalRIAgreement.eix;NonProportionalRIAgreement.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface NonProportionalRIAgreementInternal extends com.guidewire._generated.entity.RIAgreementInternal, com.guidewire.pc.domain.reinsurance.NonProportionalRIAgreementPublicMethods {
  /**
   * Gets the value of the CedingRate field.
   * If a non-proportional treaty is divided among multiple participants, then they will each negotiate a rate for their participation.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getCedingRate();
  
  
  /**
   * Gets the value of the GNPSubtotal field.
   * Gross Net Premium Subtotal
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.GNPSubtotalType getGNPSubtotal();
  
  
  /**
   * Gets the value of the ApplyToGrossRetentionOnly field.
   * Agreement coverage applies up to the gross retention only
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isApplyToGrossRetentionOnly();
  
  
  /**
   * Gets the value of the AttachmentIndexed field.
   * Indicates whether loss costs will be adjusted by an inflation index before determining whether they exceed the attachment point.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isAttachmentIndexed();
  
  
  /**
   * Gets the value of the CalculateCededPremium field.
   * For some types of ceding calculations, it makes more sense to do aggregate calculations across the entire book of business rather than doing premium transaction-level calculations.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isCalculateCededPremium();
  
  
  /**
   * Gets the value of the CedingRateAdjusted field.
   * True if ceding rate is adjusted for each participant.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isCedingRateAdjusted();
  
  
  /**
   * Gets the value of the LimitIndexed field.
   * Same concept of adjusting the loss cost as Attachment Indexed but for the Limit.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isLimitIndexed();
  
  
  /**
   * Sets the value of the ApplyToGrossRetentionOnly field.
   */
  public void setApplyToGrossRetentionOnly(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the AttachmentIndexed field.
   */
  public void setAttachmentIndexed(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the CalculateCededPremium field.
   */
  public void setCalculateCededPremium(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the CedingRate field.
   */
  public void setCedingRate(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the CedingRateAdjusted field.
   */
  public void setCedingRateAdjusted(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the GNPSubtotal field.
   */
  public void setGNPSubtotal(typekey.GNPSubtotalType value);
  
  
  /**
   * Sets the value of the LimitIndexed field.
   */
  public void setLimitIndexed(java.lang.Boolean value);
  
  
  
}