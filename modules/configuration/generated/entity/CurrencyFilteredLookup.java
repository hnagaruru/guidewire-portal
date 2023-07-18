package entity;

/**
 * CurrencyFilteredLookup
 * Delegate for availability lookup entities where Currency is an optional restriction.
 */
@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "CurrencyFilteredLookup.eti;CurrencyFilteredLookup.eix;CurrencyFilteredLookup.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
public interface CurrencyFilteredLookup extends gw.pl.persistence.core.Bean {
  public static final gw.pl.persistence.type.EntityTypeReference<entity.CurrencyFilteredLookup> TYPE = new com.guidewire.commons.metadata.types.EntityIntrinsicTypeReference<entity.CurrencyFilteredLookup>("entity.CurrencyFilteredLookup");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> CURRENCY_DYNPROP = new com.guidewire.commons.metadata.types.TypekeyDynPropertyInfo("Currency", "Currency");
  
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