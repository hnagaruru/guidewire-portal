package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BusinessAutoLine/coveragepatterns/CA_PIP_AR.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class CA_PIP_AR extends entity.BAStateCov {
  protected CA_PIP_AR()  {
    super((java.lang.Void)null);
  }
  
  public CA_PIP_AR(entity.PolicyPeriod branch)  {
    super(branch, "CA_PIP_AR");
  }
  
  public CA_PIP_AR(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "CA_PIP_AR");
  }
  
  public productmodel.OptionBAPIP_AR_MedType getBAPIP_AR_MedTerm() {
    return (productmodel.OptionBAPIP_AR_MedType)getCovTerm("BAPIP_AR_Med");
  }
  
  public productmodel.GenericBAPIP_AR_WorkLossType getBAPIP_AR_WorkLossTerm() {
    return (productmodel.GenericBAPIP_AR_WorkLossType)getCovTerm("BAPIP_AR_WorkLoss");
  }
  
  public boolean getHasBAPIP_AR_MedTerm() {
    return hasCovTerm("BAPIP_AR_Med");
  }
  
  public boolean getHasBAPIP_AR_WorkLossTerm() {
    return hasCovTerm("BAPIP_AR_WorkLoss");
  }
  
  public boolean getHasPIP_AR_DeathTerm() {
    return hasCovTerm("PIP_AR_Death");
  }
  
  public productmodel.OptionPIP_AR_DeathType getPIP_AR_DeathTerm() {
    return (productmodel.OptionPIP_AR_DeathType)getCovTerm("PIP_AR_Death");
  }
  
  static {
    com.guidewire._generated.productmodel.CA_PIP_ARInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.CA_PIP_AR>() {
      public productmodel.CA_PIP_AR newEmptyInstance() {
        return new productmodel.CA_PIP_AR();
      }
      
      
    });
  }
}