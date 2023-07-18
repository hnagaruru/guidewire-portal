package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BOPLine/coveragepatterns/BOPPersonalEffects.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class OptionBOPPersEffectsLimTypeImpl extends com.guidewire.pc.api.domain.covterm.OptionCovTermInternal<productmodel.OptionBOPPersEffectsLimType> implements productmodel.OptionBOPPersEffectsLimType {
  public OptionBOPPersEffectsLimTypeImpl(gw.api.productmodel.OptionCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.BOPPersonalEffects getBOPPersonalEffects() {
    return (productmodel.BOPPersonalEffects)getClause();
  }
  
  @java.lang.Override
  public productmodel.BOPPersonalEffects getCoverage() {
    return (productmodel.BOPPersonalEffects)getClause();
  }
  
  
}