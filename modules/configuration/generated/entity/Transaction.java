package entity;

/**
 * Transaction
 * 
 *     A delegate representing a particular transaction that should not be broken up any further.
 *   
 */
@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "Transaction.eti;Transaction.eix;Transaction.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
public interface Transaction extends entity.EffDated {
  public static final gw.pl.persistence.type.EntityTypeReference<entity.Transaction> TYPE = new com.guidewire.commons.metadata.types.EntityIntrinsicTypeReference<entity.Transaction>("entity.Transaction");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IMonetaryAmountPropertyInfo> AMOUNT_DYNPROP = new com.guidewire.commons.metadata.types.MonetaryAmountDynPropertyInfo("Amount", "Amount");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IMonetaryAmountPropertyInfo> AMOUNTBILLING_DYNPROP = new com.guidewire.commons.metadata.types.MonetaryAmountDynPropertyInfo("AmountBilling", "AmountBilling");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> AMOUNTBILLING_AMT_DYNPROP = new com.guidewire.commons.metadata.types.ColumnDynPropertyInfo("AmountBilling_amt", "AmountBilling");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> AMOUNTBILLING_CUR_DYNPROP = new com.guidewire.commons.metadata.types.TypekeyDynPropertyInfo("AmountBilling_cur", "AmountBilling_cur");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> AMOUNT_AMT_DYNPROP = new com.guidewire.commons.metadata.types.ColumnDynPropertyInfo("Amount_amt", "Amount");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> AMOUNT_CUR_DYNPROP = new com.guidewire.commons.metadata.types.TypekeyDynPropertyInfo("Amount_cur", "Amount_cur");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CHARGED_DYNPROP = new com.guidewire.commons.metadata.types.ColumnDynPropertyInfo("Charged", "Charged");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> EFFDATE_DYNPROP = new com.guidewire.commons.metadata.types.ColumnDynPropertyInfo("EffDate", "EffDate");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> EXPDATE_DYNPROP = new com.guidewire.commons.metadata.types.ColumnDynPropertyInfo("ExpDate", "ExpDate");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> POLICYFXRATE_DYNPROP = new com.guidewire.commons.metadata.types.LinkDynPropertyInfo("PolicyFXRate", "PolicyFXRate");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> POSTEDDATE_DYNPROP = new com.guidewire.commons.metadata.types.ColumnDynPropertyInfo("PostedDate", "PostedDate");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> TOBEACCRUED_DYNPROP = new com.guidewire.commons.metadata.types.ColumnDynPropertyInfo("ToBeAccrued", "ToBeAccrued");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> WRITTEN_DYNPROP = new com.guidewire.commons.metadata.types.ColumnDynPropertyInfo("Written", "Written");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> WRITTENDATE_DYNPROP = new com.guidewire.commons.metadata.types.ColumnDynPropertyInfo("WrittenDate", "WrittenDate");
  
  /**
   * 
   * @return A description of this transaction suitable for debugging.
   */
  public java.lang.String debugString();
  
  
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
  
  
  public entity.Cost getCost();
  
  
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
  
  
  /**
   * Gets the value of the PostedDate field.
   * The date on which the transaction was posted.  For transactions that haven't yet been posted, this field will be null.  Otherwise, it will be equal to the date on which the job was bound or (in the case of audits) completed.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getPostedDate();
  
  
  /**
   * 
   * @return the number of days in the effective period divided by the number of days in the cost's rated period.
   *         This factor should only be used for display purposes.
   */
  public double getProration();
  
  
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
   * 
   * @return true when the length of the effective period does not match the number of days in the cost's rated term
   */
  public boolean isProrated();
  
  
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
   * Merges this transaction with the <code>other</code> transaction and returns true if it succeeds.  This happens
   * if both transactions have the same cost and abut each other in effective time.  On merge, this transaction's
   * effective period is expanded to the other's, its amount incremented by the other transaction's amount,
   * and the other transaction is removed.
   * @param other the transaction to be merged with
   * @return true if successful
   */
  public boolean merge(entity.Transaction other);
  
  
  /**
   * Remove a cost entirely from the term.  This is different from the normal {@link entity.EffDated#remove()}
   * mechanics that normally truncate the cost to the slice date.  This method removes and never persists a cost if
   * it has not been persisted.  If it has already been persisted, then it sets ExpirationDate to the EffectiveDate so
   * that it has 0 days of effectivity.
   */
  public void removeFromTerm();
  
  
  /**
   * Sets the value of the Amount field.
   */
  public void setAmount(gw.pl.currency.MonetaryAmount value);
  
  
  /**
   * Sets the value of the AmountBilling field.
   */
  public void setAmountBilling(gw.pl.currency.MonetaryAmount value);
  
  
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