package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "Transaction.eti;Transaction.eix;Transaction.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface TransactionInternal extends com.guidewire._generated.entity.EffDatedInternal, com.guidewire.pc.domain.financials.TransactionPublicMethods, com.guidewire.pc.domain.financials.impl.TransactionInternalMethods, gw.api.domain.financials.TransactionAdapter {
  /**
   * Gets the value of the Amount field.
   * The transaction amount for the effective time [EffDate, ExpDate).
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.currency.MonetaryAmount getAmount();
  
  
  /**
   * Gets the value of the AmountBilling field.
   * The transaction amount for the effective time [EffDate, ExpDate).
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.currency.MonetaryAmount getAmountBilling();
  
  
  /**
   * Gets the value of the AmountBilling_amt field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getAmountBilling_amt();
  
  
  /**
   * Gets the value of the AmountBilling_cur field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Currency getAmountBilling_cur();
  
  
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
   * Gets the value of the EffDate field.
   * The date on which the transaction becomes effective.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getEffDate();
  
  
  /**
   * Gets the value of the ExpDate field.
   * The date on which the transaction expires.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getExpDate();
  
  
  /**
   * Gets the value of the PolicyFXRate field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyFXRate getPolicyFXRate();
  
  
  public gw.pl.persistence.core.Key getPolicyFXRateID();
  
  
  /**
   * Gets the value of the PostedDate field.
   * The date on which the transaction was posted.  For transactions that haven't yet been posted, this field will be null.  Otherwise, it will be equal to the date on which the job was bound or (in the case of audits) completed.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getPostedDate();
  
  
  /**
   * Gets the value of the WrittenDate field.
   * The date on which (for accounting purposes) the premium is considered as written.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getWrittenDate();
  
  
  /**
   * Gets the value of the Charged field.
   * Whether or not this transaction amount should be charged.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isCharged();
  
  
  /**
   * Gets the value of the ToBeAccrued field.
   * Whether or not this transaction amount should be included in earned premium accrual calculations.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isToBeAccrued();
  
  
  /**
   * Gets the value of the Written field.
   * Whether or not this transaction amount should be counted in written premium calculations.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isWritten();
  
  
  /**
   * Sets the value of the Amount field.
   */
  public void setAmount(gw.pl.currency.MonetaryAmount value);
  
  
  /**
   * Sets the value of the AmountBilling field.
   */
  public void setAmountBilling(gw.pl.currency.MonetaryAmount value);
  
  
  /**
   * Sets the value of the AmountBilling_amt field.
   */
  public void setAmountBilling_amt(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the AmountBilling_cur field.
   */
  public void setAmountBilling_cur(typekey.Currency value);
  
  
  /**
   * Sets the value of the Amount_amt field.
   */
  public void setAmount_amt(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the Amount_cur field.
   */
  public void setAmount_cur(typekey.Currency value);
  
  
  /**
   * Sets the value of the Charged field.
   */
  public void setCharged(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the EffDate field.
   */
  public void setEffDate(java.util.Date value);
  
  
  /**
   * Sets the value of the ExpDate field.
   */
  public void setExpDate(java.util.Date value);
  
  
  /**
   * Sets the value of the PolicyFXRate field.
   */
  public void setPolicyFXRate(entity.PolicyFXRate value);
  
  
  public void setPolicyFXRateID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the PostedDate field.
   */
  public void setPostedDate(java.util.Date value);
  
  
  /**
   * Sets the value of the ToBeAccrued field.
   */
  public void setToBeAccrued(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the Written field.
   */
  public void setWritten(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the WrittenDate field.
   */
  public void setWrittenDate(java.util.Date value);
  
  
  
}