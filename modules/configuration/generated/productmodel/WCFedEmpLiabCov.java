package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/WorkersCompLine/coveragepatterns/WCFedEmpLiabCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class WCFedEmpLiabCov extends entity.WorkersCompCov {
  protected WCFedEmpLiabCov()  {
    super((java.lang.Void)null);
  }
  
  public WCFedEmpLiabCov(entity.PolicyPeriod branch)  {
    super(branch, "WCFedEmpLiabCov");
  }
  
  public WCFedEmpLiabCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "WCFedEmpLiabCov");
  }
  
  public productmodel.OptionFELADiseaseType getFELADiseaseTerm() {
    return (productmodel.OptionFELADiseaseType)getCovTerm("FELADisease");
  }
  
  public productmodel.TypekeyFedEmpLiabActType getFedEmpLiabActTerm() {
    return (productmodel.TypekeyFedEmpLiabActType)getCovTerm("FedEmpLiabAct");
  }
  
  public boolean getHasFELADiseaseTerm() {
    return hasCovTerm("FELADisease");
  }
  
  public boolean getHasFedEmpLiabActTerm() {
    return hasCovTerm("FedEmpLiabAct");
  }
  
  public boolean getHasWCFedEmpLiabCovProgramTerm() {
    return hasCovTerm("WCFedEmpLiabCovProgram");
  }
  
  public boolean getHasWCFedEmpLiabLimitTerm() {
    return hasCovTerm("WCFedEmpLiabLimit");
  }
  
  public boolean getHasWCFedEmpLiabilityLawTerm() {
    return hasCovTerm("WCFedEmpLiabilityLaw");
  }
  
  public productmodel.TypekeyWCFedEmpLiabCovProgramType getWCFedEmpLiabCovProgramTerm() {
    return (productmodel.TypekeyWCFedEmpLiabCovProgramType)getCovTerm("WCFedEmpLiabCovProgram");
  }
  
  public productmodel.OptionWCFedEmpLiabLimitType getWCFedEmpLiabLimitTerm() {
    return (productmodel.OptionWCFedEmpLiabLimitType)getCovTerm("WCFedEmpLiabLimit");
  }
  
  public productmodel.TypekeyWCFedEmpLiabilityLawType getWCFedEmpLiabilityLawTerm() {
    return (productmodel.TypekeyWCFedEmpLiabilityLawType)getCovTerm("WCFedEmpLiabilityLaw");
  }
  
  static {
    com.guidewire._generated.productmodel.WCFedEmpLiabCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.WCFedEmpLiabCov>() {
      public productmodel.WCFedEmpLiabCov newEmptyInstance() {
        return new productmodel.WCFedEmpLiabCov();
      }
      
      
    });
  }
}