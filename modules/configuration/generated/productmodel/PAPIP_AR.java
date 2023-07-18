package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/PersonalAutoLine/coveragepatterns/PAPIP_AR.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class PAPIP_AR extends entity.PersonalAutoCov {
  protected PAPIP_AR()  {
    super((java.lang.Void)null);
  }
  
  public PAPIP_AR(entity.PolicyPeriod branch)  {
    super(branch, "PAPIP_AR");
  }
  
  public PAPIP_AR(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "PAPIP_AR");
  }
  
  public boolean getHasPAPIP_AR_DeathTerm() {
    return hasCovTerm("PAPIP_AR_Death");
  }
  
  public boolean getHasPAPIP_AR_MedTerm() {
    return hasCovTerm("PAPIP_AR_Med");
  }
  
  public boolean getHasPAPIP_AR_WorkLossTerm() {
    return hasCovTerm("PAPIP_AR_WorkLoss");
  }
  
  public productmodel.OptionPAPIP_AR_DeathType getPAPIP_AR_DeathTerm() {
    return (productmodel.OptionPAPIP_AR_DeathType)getCovTerm("PAPIP_AR_Death");
  }
  
  public productmodel.OptionPAPIP_AR_MedType getPAPIP_AR_MedTerm() {
    return (productmodel.OptionPAPIP_AR_MedType)getCovTerm("PAPIP_AR_Med");
  }
  
  public productmodel.GenericPAPIP_AR_WorkLossType getPAPIP_AR_WorkLossTerm() {
    return (productmodel.GenericPAPIP_AR_WorkLossType)getCovTerm("PAPIP_AR_WorkLoss");
  }
  
  static {
    com.guidewire._generated.productmodel.PAPIP_ARInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.PAPIP_AR>() {
      public productmodel.PAPIP_AR newEmptyInstance() {
        return new productmodel.PAPIP_AR();
      }
      
      
    });
  }
}