package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "LossFinancials.eti;LossFinancials.eix;LossFinancials.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface LossFinancialsInternal extends com.guidewire._generated.entity.VersionableInternal {
  /**
   * Gets the value of the AsOfDate field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getAsOfDate();
  
  
  /**
   * Gets the value of the BeginDate field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getBeginDate();
  
  
  /**
   * Gets the value of the EndDate field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getEndDate();
  
  
  /**
   * Gets the value of the OpenExpenseReserves field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.currency.MonetaryAmount getOpenExpenseReserves();
  
  
  /**
   * Gets the value of the OpenExpenseReserves_amt field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getOpenExpenseReserves_amt();
  
  
  /**
   * Gets the value of the OpenExpenseReserves_cur field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Currency getOpenExpenseReserves_cur();
  
  
  /**
   * Gets the value of the OpenLossReserves field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.currency.MonetaryAmount getOpenLossReserves();
  
  
  /**
   * Gets the value of the OpenLossReserves_amt field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getOpenLossReserves_amt();
  
  
  /**
   * Gets the value of the OpenLossReserves_cur field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Currency getOpenLossReserves_cur();
  
  
  /**
   * Gets the value of the PolicyNumber field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPolicyNumber();
  
  
  /**
   * Gets the value of the TotalPaidExpense field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.currency.MonetaryAmount getTotalPaidExpense();
  
  
  /**
   * Gets the value of the TotalPaidExpense_amt field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getTotalPaidExpense_amt();
  
  
  /**
   * Gets the value of the TotalPaidExpense_cur field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Currency getTotalPaidExpense_cur();
  
  
  /**
   * Gets the value of the TotalPaidLoss field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.currency.MonetaryAmount getTotalPaidLoss();
  
  
  /**
   * Gets the value of the TotalPaidLoss_amt field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getTotalPaidLoss_amt();
  
  
  /**
   * Gets the value of the TotalPaidLoss_cur field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Currency getTotalPaidLoss_cur();
  
  
  /**
   * Gets the value of the TotalRecoveries field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.currency.MonetaryAmount getTotalRecoveries();
  
  
  /**
   * Gets the value of the TotalRecoveries_amt field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getTotalRecoveries_amt();
  
  
  /**
   * Gets the value of the TotalRecoveries_cur field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Currency getTotalRecoveries_cur();
  
  
  /**
   * Sets the value of the AsOfDate field.
   */
  public void setAsOfDate(java.util.Date value);
  
  
  /**
   * Sets the value of the BeginDate field.
   */
  public void setBeginDate(java.lang.String value);
  
  
  /**
   * Sets the value of the EndDate field.
   */
  public void setEndDate(java.lang.String value);
  
  
  /**
   * Sets the value of the OpenExpenseReserves field.
   */
  public void setOpenExpenseReserves(gw.pl.currency.MonetaryAmount value);
  
  
  /**
   * Sets the value of the OpenExpenseReserves_amt field.
   */
  public void setOpenExpenseReserves_amt(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the OpenExpenseReserves_cur field.
   */
  public void setOpenExpenseReserves_cur(typekey.Currency value);
  
  
  /**
   * Sets the value of the OpenLossReserves field.
   */
  public void setOpenLossReserves(gw.pl.currency.MonetaryAmount value);
  
  
  /**
   * Sets the value of the OpenLossReserves_amt field.
   */
  public void setOpenLossReserves_amt(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the OpenLossReserves_cur field.
   */
  public void setOpenLossReserves_cur(typekey.Currency value);
  
  
  /**
   * Sets the value of the PolicyNumber field.
   */
  public void setPolicyNumber(java.lang.String value);
  
  
  /**
   * Sets the value of the TotalPaidExpense field.
   */
  public void setTotalPaidExpense(gw.pl.currency.MonetaryAmount value);
  
  
  /**
   * Sets the value of the TotalPaidExpense_amt field.
   */
  public void setTotalPaidExpense_amt(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the TotalPaidExpense_cur field.
   */
  public void setTotalPaidExpense_cur(typekey.Currency value);
  
  
  /**
   * Sets the value of the TotalPaidLoss field.
   */
  public void setTotalPaidLoss(gw.pl.currency.MonetaryAmount value);
  
  
  /**
   * Sets the value of the TotalPaidLoss_amt field.
   */
  public void setTotalPaidLoss_amt(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the TotalPaidLoss_cur field.
   */
  public void setTotalPaidLoss_cur(typekey.Currency value);
  
  
  /**
   * Sets the value of the TotalRecoveries field.
   */
  public void setTotalRecoveries(gw.pl.currency.MonetaryAmount value);
  
  
  /**
   * Sets the value of the TotalRecoveries_amt field.
   */
  public void setTotalRecoveries_amt(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the TotalRecoveries_cur field.
   */
  public void setTotalRecoveries_cur(typekey.Currency value);
  
  
  
}