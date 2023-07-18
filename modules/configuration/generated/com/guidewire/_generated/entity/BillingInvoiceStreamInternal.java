package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "BillingInvoiceStream.eti;BillingInvoiceStream.eix;BillingInvoiceStream.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface BillingInvoiceStreamInternal extends com.guidewire._generated.entity.RetireableInternal, com.guidewire._generated.entity.ExtractableInternal, com.guidewire._generated.entity.FrozenSetMemberInternal {
  /**
   * Gets the value of the DayOfWeek field.
   * For Every Week payment plans, this is the day of the week that the invoice should fall on.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.DayOfWeek getDayOfWeek();
  
  
  /**
   * Gets the value of the Description field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getDescription();
  
  
  /**
   * Gets the value of the FirstAnchorDate field.
   * A date that determines the invoicing day of month, day of week, etc.  This date should fall on the           desired invoicing day of month or day of week.           Invoices in the stream are billed (sent) DaysBeforeAnchorDatesForInvoiceBilling days before the invoicing           day of month, day of week, etc. that is specified by the anchor dates.           If the invoice payer chooses not to send invoices on a non-business day, the target bill (send) date will be           adjusted to be a business day, depending upon the payer's method of adjusting for business day.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getFirstAnchorDate();
  
  
  /**
   * Gets the value of the FirstDayOfMonth field.
   * First day (of two) of the month for twice-per-month invoicing.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getFirstDayOfMonth();
  
  
  /**
   * Gets the value of the Interval field.
   * The Periodicity of Invoices in the stream -- Weekly, Monthly, Quarterly, etc.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.BillingPeriodicity getInterval();
  
  
  /**
   * Gets the value of the PaymentInstrumentID field.
   * The Public ID of the payment instrument.  May be null.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPaymentInstrumentID();
  
  
  /**
   * Gets the value of the PaymentMethod field.
   * Payment Method (e.g. Credit Card, Send Invoice...)
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.AccountPaymentMethod getPaymentMethod();
  
  
  /**
   * Gets the value of the PolicyPeriod field.
   * The associated policy period.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyPeriod getPolicyPeriod();
  
  
  public gw.pl.persistence.core.Key getPolicyPeriodID();
  
  
  /**
   * Gets the value of the SecondAnchorDate field.
   * A date that determines the second invoicing day for periodicities that need two anchor dates.           This determines the second invoicing day of month for twice-per-month BillingPeriodicity.  This date should fall on the           desired second invoicing day of month.  If the BillingPeriodicity is twice-per-month and the second anchor date is           not set, then the stream will invoice on the day determined by the FirstAnchorDate and one-half month from then.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getSecondAnchorDate();
  
  
  /**
   * Gets the value of the SecondDayOfMonth field.
   * Second day (of two) of the month for twice-per-month invoicing.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getSecondDayOfMonth();
  
  
  /**
   * Gets the value of the UnappliedFundDescription field.
   * The description of a new unapplied fund for this invoice stream. Null if there is no new unapplied fund being created.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getUnappliedFundDescription();
  
  
  /**
   * Gets the value of the UnappliedFundID field.
   * The Public ID of the existing unapplied fund which has been selected for this invoice stream. Null if there is no existing unapplied fund.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getUnappliedFundID();
  
  
  /**
   * Gets the value of the DueDateBilling field.
   * Whether or not the account's invoice date(s) are the date the invoice is sent or due.                 If false the date is the date the invoice is sent (EventDate),                 If true the date is the date the invoice is due (PaymentDueDate)
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isDueDateBilling();
  
  
  /**
   * Sets the value of the DayOfWeek field.
   */
  public void setDayOfWeek(typekey.DayOfWeek value);
  
  
  /**
   * Sets the value of the Description field.
   */
  public void setDescription(java.lang.String value);
  
  
  /**
   * Sets the value of the DueDateBilling field.
   */
  public void setDueDateBilling(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the FirstAnchorDate field.
   */
  public void setFirstAnchorDate(java.util.Date value);
  
  
  /**
   * Sets the value of the FirstDayOfMonth field.
   */
  public void setFirstDayOfMonth(java.lang.Integer value);
  
  
  /**
   * Sets the value of the Interval field.
   */
  public void setInterval(typekey.BillingPeriodicity value);
  
  
  /**
   * Sets the value of the PaymentInstrumentID field.
   */
  public void setPaymentInstrumentID(java.lang.String value);
  
  
  /**
   * Sets the value of the PaymentMethod field.
   */
  public void setPaymentMethod(typekey.AccountPaymentMethod value);
  
  
  /**
   * Sets the value of the PolicyPeriod field.
   */
  public void setPolicyPeriod(entity.PolicyPeriod value);
  
  
  public void setPolicyPeriodID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the SecondAnchorDate field.
   */
  public void setSecondAnchorDate(java.util.Date value);
  
  
  /**
   * Sets the value of the SecondDayOfMonth field.
   */
  public void setSecondDayOfMonth(java.lang.Integer value);
  
  
  /**
   * Sets the value of the UnappliedFundDescription field.
   */
  public void setUnappliedFundDescription(java.lang.String value);
  
  
  /**
   * Sets the value of the UnappliedFundID field.
   */
  public void setUnappliedFundID(java.lang.String value);
  
  
  
}