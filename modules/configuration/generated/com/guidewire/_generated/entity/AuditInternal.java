package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "Audit.eti;Audit.eix;Audit.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface AuditInternal extends com.guidewire._generated.entity.JobInternal, com.guidewire.pc.domain.job.AuditPublicMethods {
  /**
   * Gets the value of the AuditInformation field.
   * The audit information pertaining to this audit job
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.AuditInformation getAuditInformation();
  
  
  public gw.pl.persistence.core.Key getAuditInformationID();
  
  
  /**
   * Gets the value of the PaymentReceived field.
   * The amount of any payment received, e.g. deposit when binding, or payment with premium report
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.currency.MonetaryAmount getPaymentReceived();
  
  
  /**
   * Gets the value of the PaymentReceived_amt field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getPaymentReceived_amt();
  
  
  /**
   * Gets the value of the PaymentReceived_cur field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Currency getPaymentReceived_cur();
  
  
  /**
   * Sets the value of the AuditInformation field.
   */
  public void setAuditInformation(entity.AuditInformation value);
  
  
  public void setAuditInformationID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the PaymentReceived field.
   */
  public void setPaymentReceived(gw.pl.currency.MonetaryAmount value);
  
  
  /**
   * Sets the value of the PaymentReceived_amt field.
   */
  public void setPaymentReceived_amt(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the PaymentReceived_cur field.
   */
  public void setPaymentReceived_cur(typekey.Currency value);
  
  
  
}