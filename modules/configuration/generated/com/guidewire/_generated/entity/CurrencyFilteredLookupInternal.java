package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "CurrencyFilteredLookup.eti;CurrencyFilteredLookup.eix;CurrencyFilteredLookup.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface CurrencyFilteredLookupInternal extends com.guidewire.pl.domain.persistence.core.impl.BeanInternal {
  /**
   * Gets the value of the Currency field.
   * The currency for which this lookup applies, or null if the lookup is not restricted by currency.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Currency getCurrency();
  
  
  /**
   * Sets the value of the Currency field.
   */
  public void setCurrency(typekey.Currency value);
  
  
  
}