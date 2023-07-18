package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BOPLine/coveragepatterns/BOPOrdinanceCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GenericBOPOrdLawCov1yesnoTypeImpl extends com.guidewire.pc.api.domain.covterm.BooleanCovTermInternal implements productmodel.GenericBOPOrdLawCov1yesnoType {
  public GenericBOPOrdLawCov1yesnoTypeImpl(gw.api.productmodel.GenericCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.BOPOrdinanceCov getBOPOrdinanceCov() {
    return (productmodel.BOPOrdinanceCov)getClause();
  }
  
  @java.lang.Override
  public productmodel.BOPOrdinanceCov getCoverage() {
    return (productmodel.BOPOrdinanceCov)getClause();
  }
  
  
}