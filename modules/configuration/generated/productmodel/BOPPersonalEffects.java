package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BOPLine/coveragepatterns/BOPPersonalEffects.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class BOPPersonalEffects extends entity.BOPLocationCov {
  protected BOPPersonalEffects()  {
    super((java.lang.Void)null);
  }
  
  public BOPPersonalEffects(entity.PolicyPeriod branch)  {
    super(branch, "BOPPersonalEffects");
  }
  
  public BOPPersonalEffects(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "BOPPersonalEffects");
  }
  
  public productmodel.OptionBOPPersEffectsLimType getBOPPersEffectsLimTerm() {
    return (productmodel.OptionBOPPersEffectsLimType)getCovTerm("BOPPersEffectsLim");
  }
  
  public boolean getHasBOPPersEffectsLimTerm() {
    return hasCovTerm("BOPPersEffectsLim");
  }
  
  static {
    com.guidewire._generated.productmodel.BOPPersonalEffectsInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.BOPPersonalEffects>() {
      public productmodel.BOPPersonalEffects newEmptyInstance() {
        return new productmodel.BOPPersonalEffects();
      }
      
      
    });
  }
}