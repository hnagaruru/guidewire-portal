package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BOPLine/coveragepatterns/BOPForgeAltCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class OptionBOPForgeAltLimitTypeImpl extends com.guidewire.pc.api.domain.covterm.OptionCovTermInternal<productmodel.OptionBOPForgeAltLimitType> implements productmodel.OptionBOPForgeAltLimitType {
  public OptionBOPForgeAltLimitTypeImpl(gw.api.productmodel.OptionCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.BOPForgeAltCov getBOPForgeAltCov() {
    return (productmodel.BOPForgeAltCov)getClause();
  }
  
  @java.lang.Override
  public productmodel.BOPForgeAltCov getCoverage() {
    return (productmodel.BOPForgeAltCov)getClause();
  }
  
  
}