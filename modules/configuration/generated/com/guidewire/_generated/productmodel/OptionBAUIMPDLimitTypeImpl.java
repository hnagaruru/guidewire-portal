package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BusinessAutoLine/coveragepatterns/BAOwnedUIMPDCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class OptionBAUIMPDLimitTypeImpl extends com.guidewire.pc.api.domain.covterm.OptionCovTermInternal<productmodel.OptionBAUIMPDLimitType> implements productmodel.OptionBAUIMPDLimitType {
  public OptionBAUIMPDLimitTypeImpl(gw.api.productmodel.OptionCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.BAOwnedUIMPDCov getBAOwnedUIMPDCov() {
    return (productmodel.BAOwnedUIMPDCov)getClause();
  }
  
  @java.lang.Override
  public productmodel.BAOwnedUIMPDCov getCoverage() {
    return (productmodel.BAOwnedUIMPDCov)getClause();
  }
  
  
}