package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PaymentPlanSummary.eti;PaymentPlanSummary.eix;PaymentPlanSummary.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface PaymentPlanSummaryInternal extends com.guidewire._generated.entity.RetireableInternal, com.guidewire._generated.entity.ExtractableInternal, com.guidewire._generated.entity.FrozenSetMemberInternal, com.guidewire.pc.domain.billing.PaymentPlanSummaryPublicMethods {
  /**
   * Adds the given element to the PaymentMethodsInternal array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToPaymentMethodsInternal(entity.AllowedPaymentMethod element);
  
  
  /**
   * Gets the value of the BillDateOrDueDateBilling field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.BillDateOrDueDateBilling getBillDateOrDueDateBilling();
  
  
  /**
   * Gets the value of the BillingId field.
   * Stores the billing system's Public ID for this Payment Plan
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getBillingId();
  
  
  /**
   * Gets the value of the DownPayment field.
   * DownPayment
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.currency.MonetaryAmount getDownPayment();
  
  
  /**
   * Gets the value of the DownPayment_amt field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getDownPayment_amt();
  
  
  /**
   * Gets the value of the DownPayment_cur field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Currency getDownPayment_cur();
  
  
  /**
   * Gets the value of the Fee field.
   * The installment fee charged as part of this payment plan with respect to the parent PolicyPeriod.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.currency.MonetaryAmount getFee();
  
  
  /**
   * Gets the value of the Fee_amt field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getFee_amt();
  
  
  /**
   * Gets the value of the Fee_cur field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Currency getFee_cur();
  
  
  /**
   * Gets the value of the Installment field.
   * Installment
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.currency.MonetaryAmount getInstallment();
  
  
  /**
   * Gets the value of the Installment_amt field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getInstallment_amt();
  
  
  /**
   * Gets the value of the Installment_cur field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Currency getInstallment_cur();
  
  
  /**
   * Gets the value of the InvoiceFrequency field.
   * The frequency of invoicing (weekly, every two weeks, monthly, etc.)
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.BillingPeriodicity getInvoiceFrequency();
  
  
  /**
   * Gets the value of the Name field.
   * Name of this payment plan (only for Installments plans)
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getName();
  
  
  /**
   * Gets the value of the Notes field.
   * Notes
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getNotes();
  
  
  /**
   * Gets the value of the PaymentMethodsInternal field.
   * The list of supported payment methods.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.AllowedPaymentMethod[] getPaymentMethodsInternal();
  
  
  /**
   * Gets the value of the PaymentPlanType field.
   * The type of this payment plan (typically either Installments or Reporting)
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.PaymentMethod getPaymentPlanType();
  
  
  /**
   * Gets the value of the PolicyPeriod field.
   * Policy period where the plan summary resides
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyPeriod getPolicyPeriod();
  
  
  public gw.pl.persistence.core.Key getPolicyPeriodID();
  
  
  /**
   * Gets the value of the ReportingPatternCode field.
   * The code of the pattern to use for creating and scheduling premium reports
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getReportingPatternCode();
  
  
  /**
   * Gets the value of the Tax field.
   * Tax charged as part of this payment plan with respect to the parent PolicyPeriod.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.currency.MonetaryAmount getTax();
  
  
  /**
   * Gets the value of the Tax_amt field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getTax_amt();
  
  
  /**
   * Gets the value of the Tax_cur field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Currency getTax_cur();
  
  
  /**
   * Gets the value of the Total field.
   * Total
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.currency.MonetaryAmount getTotal();
  
  
  /**
   * Gets the value of the TotalFees field.
   * The total fees charged as part of this payment plan with respect to the parent PolicyPeriod.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.currency.MonetaryAmount getTotalFees();
  
  
  /**
   * Gets the value of the TotalFees_amt field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getTotalFees_amt();
  
  
  /**
   * Gets the value of the TotalFees_cur field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Currency getTotalFees_cur();
  
  
  /**
   * Gets the value of the Total_amt field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getTotal_amt();
  
  
  /**
   * Gets the value of the Total_cur field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Currency getTotal_cur();
  
  
  /**
   * Removes the given element from the PaymentMethodsInternal array. This is achieved by marking the element for removal.
   */
  public void removeFromPaymentMethodsInternal(entity.AllowedPaymentMethod element);
  
  
  /**
   * Removes the given element from the PaymentMethodsInternal array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromPaymentMethodsInternal(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the BillDateOrDueDateBilling field.
   */
  public void setBillDateOrDueDateBilling(typekey.BillDateOrDueDateBilling value);
  
  
  /**
   * Sets the value of the BillingId field.
   */
  public void setBillingId(java.lang.String value);
  
  
  /**
   * Sets the value of the DownPayment field.
   */
  public void setDownPayment(gw.pl.currency.MonetaryAmount value);
  
  
  /**
   * Sets the value of the DownPayment_amt field.
   */
  public void setDownPayment_amt(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the DownPayment_cur field.
   */
  public void setDownPayment_cur(typekey.Currency value);
  
  
  /**
   * Sets the value of the Fee field.
   */
  public void setFee(gw.pl.currency.MonetaryAmount value);
  
  
  /**
   * Sets the value of the Fee_amt field.
   */
  public void setFee_amt(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the Fee_cur field.
   */
  public void setFee_cur(typekey.Currency value);
  
  
  /**
   * Sets the value of the Installment field.
   */
  public void setInstallment(gw.pl.currency.MonetaryAmount value);
  
  
  /**
   * Sets the value of the Installment_amt field.
   */
  public void setInstallment_amt(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the Installment_cur field.
   */
  public void setInstallment_cur(typekey.Currency value);
  
  
  /**
   * Sets the value of the InvoiceFrequency field.
   */
  public void setInvoiceFrequency(typekey.BillingPeriodicity value);
  
  
  /**
   * Sets the value of the Name field.
   */
  public void setName(java.lang.String value);
  
  
  /**
   * Sets the value of the Notes field.
   */
  public void setNotes(java.lang.String value);
  
  
  /**
   * Sets the value of the PaymentMethodsInternal field.
   */
  public void setPaymentMethodsInternal(entity.AllowedPaymentMethod[] value);
  
  
  /**
   * Sets the value of the PaymentPlanType field.
   */
  public void setPaymentPlanType(typekey.PaymentMethod value);
  
  
  /**
   * Sets the value of the PolicyPeriod field.
   */
  public void setPolicyPeriod(entity.PolicyPeriod value);
  
  
  public void setPolicyPeriodID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the ReportingPatternCode field.
   */
  public void setReportingPatternCode(java.lang.String value);
  
  
  /**
   * Sets the value of the Tax field.
   */
  public void setTax(gw.pl.currency.MonetaryAmount value);
  
  
  /**
   * Sets the value of the Tax_amt field.
   */
  public void setTax_amt(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the Tax_cur field.
   */
  public void setTax_cur(typekey.Currency value);
  
  
  /**
   * Sets the value of the Total field.
   */
  public void setTotal(gw.pl.currency.MonetaryAmount value);
  
  
  /**
   * Sets the value of the TotalFees field.
   */
  public void setTotalFees(gw.pl.currency.MonetaryAmount value);
  
  
  /**
   * Sets the value of the TotalFees_amt field.
   */
  public void setTotalFees_amt(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the TotalFees_cur field.
   */
  public void setTotalFees_cur(typekey.Currency value);
  
  
  /**
   * Sets the value of the Total_amt field.
   */
  public void setTotal_amt(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the Total_cur field.
   */
  public void setTotal_cur(typekey.Currency value);
  
  
  
}