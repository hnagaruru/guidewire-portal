package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "CoverageSymbol.eti;CoverageSymbol.eix;CoverageSymbol.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class CoverageSymbolVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.CoverageSymbolVersionList {
  public CoverageSymbolVersionListImpl(entity.CoverageSymbol base)  {
    super(base);
  }
  
  public CoverageSymbolVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.CoverageSymbol AsOf(java.util.Date date) {
    return (entity.CoverageSymbol)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.CoverageSymbol> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  
}