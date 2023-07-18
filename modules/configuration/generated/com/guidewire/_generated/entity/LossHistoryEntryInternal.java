package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "LossHistoryEntry.eti;LossHistoryEntry.eix;LossHistoryEntry.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface LossHistoryEntryInternal extends com.guidewire._generated.entity.EditableInternal, com.guidewire._generated.entity.ExtractableInternal, com.guidewire._generated.entity.FrozenSetMemberInternal, com.guidewire.pc.domain.losshistory.LossHistoryEntryPublicMethods {
  /**
   * Gets the value of the AmountPaid field.
   * The amount paid by the carrier
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.currency.MonetaryAmount getAmountPaid();
  
  
  /**
   * Gets the value of the AmountPaid_amt field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getAmountPaid_amt();
  
  
  /**
   * Gets the value of the AmountPaid_cur field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Currency getAmountPaid_cur();
  
  
  /**
   * Gets the value of the AmountResv field.
   * The amount reserved by the carrier
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.currency.MonetaryAmount getAmountResv();
  
  
  /**
   * Gets the value of the AmountResv_amt field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getAmountResv_amt();
  
  
  /**
   * Gets the value of the AmountResv_cur field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Currency getAmountResv_cur();
  
  
  /**
   * Gets the value of the Description field.
   * Description of the loss
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getDescription();
  
  
  /**
   * Gets the value of the LossCause field.
   * Cause of loss
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.LossEntryCause getLossCause();
  
  
  /**
   * Gets the value of the LossStatus field.
   * The status of the claim
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.LossEntryStatus getLossStatus();
  
  
  /**
   * Gets the value of the OccurrenceDate field.
   * The date of the loss event
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getOccurrenceDate();
  
  
  /**
   * Gets the value of the Policy field.
   * The policy with which this is associated
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Policy getPolicy();
  
  
  public gw.pl.persistence.core.Key getPolicyID();
  
  
  /**
   * Gets the value of the PolicyLinePatternCode field.
   * The applicable policy line for the loss
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPolicyLinePatternCode();
  
  
  /**
   * Gets the value of the TotalIncurred field.
   * The total incurred amount
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.currency.MonetaryAmount getTotalIncurred();
  
  
  /**
   * Gets the value of the TotalIncurred_amt field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getTotalIncurred_amt();
  
  
  /**
   * Gets the value of the TotalIncurred_cur field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Currency getTotalIncurred_cur();
  
  
  /**
   * Sets the value of the AmountPaid field.
   */
  public void setAmountPaid(gw.pl.currency.MonetaryAmount value);
  
  
  /**
   * Sets the value of the AmountPaid_amt field.
   */
  public void setAmountPaid_amt(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the AmountPaid_cur field.
   */
  public void setAmountPaid_cur(typekey.Currency value);
  
  
  /**
   * Sets the value of the AmountResv field.
   */
  public void setAmountResv(gw.pl.currency.MonetaryAmount value);
  
  
  /**
   * Sets the value of the AmountResv_amt field.
   */
  public void setAmountResv_amt(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the AmountResv_cur field.
   */
  public void setAmountResv_cur(typekey.Currency value);
  
  
  /**
   * Sets the value of the Description field.
   */
  public void setDescription(java.lang.String value);
  
  
  /**
   * Sets the value of the LossCause field.
   */
  public void setLossCause(typekey.LossEntryCause value);
  
  
  /**
   * Sets the value of the LossStatus field.
   */
  public void setLossStatus(typekey.LossEntryStatus value);
  
  
  /**
   * Sets the value of the OccurrenceDate field.
   */
  public void setOccurrenceDate(java.util.Date value);
  
  
  /**
   * Sets the value of the Policy field.
   */
  public void setPolicy(entity.Policy value);
  
  
  public void setPolicyID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the PolicyLinePatternCode field.
   */
  public void setPolicyLinePatternCode(java.lang.String value);
  
  
  /**
   * Sets the value of the TotalIncurred field.
   */
  public void setTotalIncurred(gw.pl.currency.MonetaryAmount value);
  
  
  /**
   * Sets the value of the TotalIncurred_amt field.
   */
  public void setTotalIncurred_amt(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the TotalIncurred_cur field.
   */
  public void setTotalIncurred_cur(typekey.Currency value);
  
  
  
}