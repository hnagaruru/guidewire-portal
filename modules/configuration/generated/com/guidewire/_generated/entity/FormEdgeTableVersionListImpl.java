package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "FormEdgeTable.eti;FormEdgeTable.eix;FormEdgeTable.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class FormEdgeTableVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.FormEdgeTableVersionList {
  public FormEdgeTableVersionListImpl(entity.FormEdgeTable base)  {
    super(base);
  }
  
  public FormEdgeTableVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.FormEdgeTable AsOf(java.util.Date date) {
    return (entity.FormEdgeTable)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.FormEdgeTable> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  
}