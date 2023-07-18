package entity;

/**
 * IndustryCodeDrivenLookup
 * Delegate for availability lookup entities where IndustryCode is an optional restriction.
 */
@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "IndustryCodeDrivenLookup.eti;IndustryCodeDrivenLookup.eix;IndustryCodeDrivenLookup.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
public interface IndustryCodeDrivenLookup extends gw.pl.persistence.core.Bean {
  public static final gw.pl.persistence.type.EntityTypeReference<entity.IndustryCodeDrivenLookup> TYPE = new com.guidewire.commons.metadata.types.EntityIntrinsicTypeReference<entity.IndustryCodeDrivenLookup>("entity.IndustryCodeDrivenLookup");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> INDUSTRYCODE_DYNPROP = new com.guidewire.commons.metadata.types.LinkDynPropertyInfo("IndustryCode", "IndustryCode");
  
  /**
   * Gets the value of the IndustryCode field.
   * The industry code for which this lookup applies, or null if the lookup is not restricted by industry code
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.IndustryCode getIndustryCode();
  
  
  /**
   * Sets the value of the IndustryCode field.
   */
  public void setIndustryCode(entity.IndustryCode value);
  
  
  
}