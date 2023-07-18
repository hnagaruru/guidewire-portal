package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/PersonalAutoLine/coveragepatterns/PAUIMBICov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class PackagePAUIMBITypeImpl extends com.guidewire.pc.api.domain.covterm.PackageCovTermInternal<productmodel.PackagePAUIMBIType> implements productmodel.PackagePAUIMBIType {
  public PackagePAUIMBITypeImpl(gw.api.productmodel.PackageCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.PAUIMBICov getCoverage() {
    return (productmodel.PAUIMBICov)getClause();
  }
  
  @java.lang.Override
  public productmodel.PAUIMBICov getPAUIMBICov() {
    return (productmodel.PAUIMBICov)getClause();
  }
  
  
}