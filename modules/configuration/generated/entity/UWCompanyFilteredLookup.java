package entity;

/**
 * UWCompanyFilteredLookup
 * Delegate for availability lookup entities where UWCompany is an optional restriction.
 */
@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "UWCompanyFilteredLookup.eti;UWCompanyFilteredLookup.eix;UWCompanyFilteredLookup.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
public interface UWCompanyFilteredLookup extends gw.pl.persistence.core.Bean {
  public static final gw.pl.persistence.type.EntityTypeReference<entity.UWCompanyFilteredLookup> TYPE = new com.guidewire.commons.metadata.types.EntityIntrinsicTypeReference<entity.UWCompanyFilteredLookup>("entity.UWCompanyFilteredLookup");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> UWCOMPANYCODE_DYNPROP = new com.guidewire.commons.metadata.types.TypekeyDynPropertyInfo("UWCompanyCode", "UWCompanyCode");
  
  /**
   * Gets the value of the UWCompanyCode field.
   * The underwriting company for which this lookup applies, or null if the lookup is not restricted by underwriting company
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.UWCompanyCode getUWCompanyCode();
  
  
  /**
   * Sets the value of the UWCompanyCode field.
   */
  public void setUWCompanyCode(typekey.UWCompanyCode value);
  
  
  
}