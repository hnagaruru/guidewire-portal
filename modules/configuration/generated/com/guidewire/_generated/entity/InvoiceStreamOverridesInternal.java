package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "InvoiceStreamOverrides.eti;InvoiceStreamOverrides.eix;InvoiceStreamOverrides.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface InvoiceStreamOverridesInternal extends com.guidewire._generated.entity.RetireableInternal, com.guidewire._generated.entity.ExtractableInternal, com.guidewire._generated.entity.FrozenSetMemberInternal {
  /**
   * Gets the value of the AnchorDate field.
   * An AnchorDate is the invoice day of month, invoice day of week, or every-other-week anchor date for an invoice stream.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getAnchorDate();
  
  
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
   * Gets the value of the FirstDayOfMonth field.
   * Day of month for monthly periodicity or first day (of two) of the month for twice-per-month periodicity.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getFirstDayOfMonth();
  
  
  /**
   * Gets the value of the LeadTimeDayCount field.
   * The lead time for invoices in the stream.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getLeadTimeDayCount();
  
  
  /**
   * Gets the value of the PaymentInstrumentID field.
   * The Public ID of the payment instrument.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPaymentInstrumentID();
  
  
  /**
   * Gets the value of the PolicyPeriod field.
   * The associated policy period.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyPeriod getPolicyPeriod();
  
  
  public gw.pl.persistence.core.Key getPolicyPeriodID();
  
  
  /**
   * Gets the value of the SecondDayOfMonth field.
   * Second day (of two) of the month for twice-per-month invoicing.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getSecondDayOfMonth();
  
  
  /**
   * Gets the value of the DueDateBilling field.
   * Whether or not the account's invoice date(s) are the date the invoice is sent or due. If false the date is the date the invoice is sent (EventDate), If true the date is the date the invoice is due (PaymentDueDate)
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isDueDateBilling();
  
  
  /**
   * Sets the value of the AnchorDate field.
   */
  public void setAnchorDate(java.util.Date value);
  
  
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
   * Sets the value of the FirstDayOfMonth field.
   */
  public void setFirstDayOfMonth(java.lang.Integer value);
  
  
  /**
   * Sets the value of the LeadTimeDayCount field.
   */
  public void setLeadTimeDayCount(java.lang.Integer value);
  
  
  /**
   * Sets the value of the PaymentInstrumentID field.
   */
  public void setPaymentInstrumentID(java.lang.String value);
  
  
  /**
   * Sets the value of the PolicyPeriod field.
   */
  public void setPolicyPeriod(entity.PolicyPeriod value);
  
  
  public void setPolicyPeriodID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the SecondDayOfMonth field.
   */
  public void setSecondDayOfMonth(java.lang.Integer value);
  
  
  
}