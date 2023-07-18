package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PolicyFXRate.eti;PolicyFXRate.eix;PolicyFXRate.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface PolicyFXRateInternal extends com.guidewire._generated.entity.RetireableInternal, com.guidewire._generated.entity.ExtractableInternal, com.guidewire._generated.entity.FrozenSetMemberInternal, gw.currency.fxrate.FXRate, gw.pc.currency.entity.PolicyFXRate {
  /**
   * Gets the value of the FromCurrency field.
   * Base currency or first currency in currency pair
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Currency getFromCurrency();
  
  
  /**
   * Gets the value of the Market field.
   * The FXRateMarket for which the rate applies
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.FXRateMarket getMarket();
  
  
  /**
   * Gets the value of the MarketTime field.
   * The point in time when the market indicated the rate was applicable
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getMarketTime();
  
  
  /**
   * Gets the value of the PolicyPeriod field.
   * The policy period to which this foreign exchange rate belongs.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyPeriod getPolicyPeriod();
  
  
  public gw.pl.persistence.core.Key getPolicyPeriodID();
  
  
  /**
   * Gets the value of the Rate field.
   * The exchange spot rate at which a currency pair can be bought or sold
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getRate();
  
  
  /**
   * Gets the value of the RetrievedAt field.
   * The point in time when the quotation was obtained from an external source
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getRetrievedAt();
  
  
  /**
   * Gets the value of the Subtype field.
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.PolicyFXRate getSubtype();
  
  
  /**
   * Gets the value of the ToCurrency field.
   * quote currency or second currency in currency pair
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Currency getToCurrency();
  
  
  /**
   * Sets the value of the FromCurrency field.
   */
  public void setFromCurrency(typekey.Currency value);
  
  
  /**
   * Sets the value of the Market field.
   */
  public void setMarket(typekey.FXRateMarket value);
  
  
  /**
   * Sets the value of the MarketTime field.
   */
  public void setMarketTime(java.util.Date value);
  
  
  /**
   * Sets the value of the PolicyPeriod field.
   */
  public void setPolicyPeriod(entity.PolicyPeriod value);
  
  
  public void setPolicyPeriodID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Rate field.
   */
  public void setRate(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the RetrievedAt field.
   */
  public void setRetrievedAt(java.util.Date value);
  
  
  /**
   * Sets the value of the Subtype field.
   */
  public void setSubtype(typekey.PolicyFXRate value);
  
  
  /**
   * Sets the value of the ToCurrency field.
   */
  public void setToCurrency(typekey.Currency value);
  
  
  
}