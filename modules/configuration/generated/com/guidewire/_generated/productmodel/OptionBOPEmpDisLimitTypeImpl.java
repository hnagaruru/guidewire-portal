package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BOPLine/coveragepatterns/BOPEmpDisCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class OptionBOPEmpDisLimitTypeImpl extends com.guidewire.pc.api.domain.covterm.OptionCovTermInternal<productmodel.OptionBOPEmpDisLimitType> implements productmodel.OptionBOPEmpDisLimitType {
  public OptionBOPEmpDisLimitTypeImpl(gw.api.productmodel.OptionCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.BOPEmpDisCov getBOPEmpDisCov() {
    return (productmodel.BOPEmpDisCov)getClause();
  }
  
  @java.lang.Override
  public productmodel.BOPEmpDisCov getCoverage() {
    return (productmodel.BOPEmpDisCov)getClause();
  }
  
  
}