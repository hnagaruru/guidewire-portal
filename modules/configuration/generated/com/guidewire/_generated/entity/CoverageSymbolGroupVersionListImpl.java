package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "CoverageSymbolGroup.eti;CoverageSymbolGroup.eix;CoverageSymbolGroup.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class CoverageSymbolGroupVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.CoverageSymbolGroupVersionList {
  public CoverageSymbolGroupVersionListImpl(entity.CoverageSymbolGroup base)  {
    super(base);
  }
  
  public CoverageSymbolGroupVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.CoverageSymbolGroup AsOf(java.util.Date date) {
    return (entity.CoverageSymbolGroup)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.CoverageSymbol> CoverageSymbolsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.CoverageSymbolGroup.COVERAGESYMBOLS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToCoverageSymbols(entity.CoverageSymbol bean) {
    addToArray(entity.CoverageSymbolGroup.COVERAGESYMBOLS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.CoverageSymbolGroup> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.CoverageSymbolVersionList> getCoverageSymbols() {
    return (java.util.List)getArray(entity.CoverageSymbolGroup.COVERAGESYMBOLS_PROP.get());
  }
  
  
}