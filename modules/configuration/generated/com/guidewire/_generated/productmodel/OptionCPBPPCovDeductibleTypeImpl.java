package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/CPLine/coveragepatterns/CPBPPCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class OptionCPBPPCovDeductibleTypeImpl extends com.guidewire.pc.api.domain.covterm.OptionCovTermInternal<productmodel.OptionCPBPPCovDeductibleType> implements productmodel.OptionCPBPPCovDeductibleType {
  public OptionCPBPPCovDeductibleTypeImpl(gw.api.productmodel.OptionCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.CPBPPCov getCPBPPCov() {
    return (productmodel.CPBPPCov)getClause();
  }
  
  @java.lang.Override
  public productmodel.CPBPPCov getCoverage() {
    return (productmodel.CPBPPCov)getClause();
  }
  
  
}