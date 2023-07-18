package entity;

/**
 * CoverageSymbolGroupOwner
 * 
 *     Delegate that can be implemented by any entity that has CoverageSymbolGroups.
 *   
 */
@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "CoverageSymbolGroupOwner.eti;CoverageSymbolGroupOwner.eix;CoverageSymbolGroupOwner.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
public interface CoverageSymbolGroupOwner extends gw.pl.persistence.core.Bean {
  public static final gw.pl.persistence.type.EntityTypeReference<entity.CoverageSymbolGroupOwner> TYPE = new com.guidewire.commons.metadata.types.EntityIntrinsicTypeReference<entity.CoverageSymbolGroupOwner>("entity.CoverageSymbolGroupOwner");
  
  /**
   * Creates and adds CoverageSymbolGroups using CoverageSymbolGroupPatterns
   * that belong to this owner's PolicyLine.
   */
  public void createCoverageSymbolGroups();
  
  
  public entity.CoverageSymbolGroup getCoverageSymbolGroup(gw.api.productmodel.CoverageSymbolGroupPattern coverageSymbolGroupPattern);
  
  
  
}