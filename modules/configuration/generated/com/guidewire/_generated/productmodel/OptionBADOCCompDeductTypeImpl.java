package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BusinessAutoLine/coveragepatterns/BADOCCompCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class OptionBADOCCompDeductTypeImpl extends com.guidewire.pc.api.domain.covterm.OptionCovTermInternal<productmodel.OptionBADOCCompDeductType> implements productmodel.OptionBADOCCompDeductType {
  public OptionBADOCCompDeductTypeImpl(gw.api.productmodel.OptionCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.BADOCCompCov getBADOCCompCov() {
    return (productmodel.BADOCCompCov)getClause();
  }
  
  @java.lang.Override
  public productmodel.BADOCCompCov getCoverage() {
    return (productmodel.BADOCCompCov)getClause();
  }
  
  
}