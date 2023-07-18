package entity;

/**
 * LossDateAttachable
 * Delegate for Reinsurance Agreements which can have AttachmentBasis of RILossDateAttachment.
 */
@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "LossDateAttachable.eti;LossDateAttachable.eix;LossDateAttachable.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
public interface LossDateAttachable extends gw.pl.persistence.core.Bean {
  public static final gw.pl.persistence.type.EntityTypeReference<entity.LossDateAttachable> TYPE = new com.guidewire.commons.metadata.types.EntityIntrinsicTypeReference<entity.LossDateAttachable>("entity.LossDateAttachable");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> ATTACHMENTBASIS_DYNPROP = new com.guidewire.commons.metadata.types.TypekeyDynPropertyInfo("AttachmentBasis", "AttachmentBasis");
  
  /**
   * Return the acceptable value for AttachmentBasis of this agreement.
   * @return an array of AttachmentBasisTypes
   */
  public typekey.AttachmentBasisType[] getAcceptableAttachmentBasisTypes();
  
  
  /**
   * Gets the value of the AttachmentBasis field.
   * Defines how applicable reinsurance agreements are determined at the time of ceding premiums or recovering on losses.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.AttachmentBasisType getAttachmentBasis();
  
  
  /**
   * Sets the value of the AttachmentBasis field.
   * @param value 
   */
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  public void setAttachmentBasis(typekey.AttachmentBasisType value);
  
  
  
}