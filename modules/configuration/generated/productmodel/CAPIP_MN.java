package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BusinessAutoLine/coveragepatterns/CAPIP_MN.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class CAPIP_MN extends entity.BAStateCov {
  protected CAPIP_MN()  {
    super((java.lang.Void)null);
  }
  
  public CAPIP_MN(entity.PolicyPeriod branch)  {
    super(branch, "CAPIP_MN");
  }
  
  public CAPIP_MN(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "CAPIP_MN");
  }
  
  public boolean getHasPIPMN_CYCLETerm() {
    return hasCovTerm("PIPMN_CYCLE");
  }
  
  public boolean getHasPIPMN_EXC_WORKTerm() {
    return hasCovTerm("PIPMN_EXC_WORK");
  }
  
  public boolean getHasPIPMN_MEDICALTerm() {
    return hasCovTerm("PIPMN_MEDICAL");
  }
  
  public boolean getHasPIPMN_MED_DEDUCTTerm() {
    return hasCovTerm("PIPMN_MED_DEDUCT");
  }
  
  public boolean getHasPIPMN_OTHERTerm() {
    return hasCovTerm("PIPMN_OTHER");
  }
  
  public boolean getHasPIPMN_OTH_DEDUCTTerm() {
    return hasCovTerm("PIPMN_OTH_DEDUCT");
  }
  
  public boolean getHasPIPMN_SERVICESTerm() {
    return hasCovTerm("PIPMN_SERVICES");
  }
  
  public boolean getHasPIPMN_STACKTerm() {
    return hasCovTerm("PIPMN_STACK");
  }
  
  public boolean getHasPIPMN_SURVIVORTerm() {
    return hasCovTerm("PIPMN_SURVIVOR");
  }
  
  public boolean getHasPIPMN_WORKTerm() {
    return hasCovTerm("PIPMN_WORK");
  }
  
  public productmodel.GenericPIPMN_CYCLEType getPIPMN_CYCLETerm() {
    return (productmodel.GenericPIPMN_CYCLEType)getCovTerm("PIPMN_CYCLE");
  }
  
  public productmodel.TypekeyPIPMN_EXC_WORKType getPIPMN_EXC_WORKTerm() {
    return (productmodel.TypekeyPIPMN_EXC_WORKType)getCovTerm("PIPMN_EXC_WORK");
  }
  
  public productmodel.OptionPIPMN_MEDICALType getPIPMN_MEDICALTerm() {
    return (productmodel.OptionPIPMN_MEDICALType)getCovTerm("PIPMN_MEDICAL");
  }
  
  public productmodel.OptionPIPMN_MED_DEDUCTType getPIPMN_MED_DEDUCTTerm() {
    return (productmodel.OptionPIPMN_MED_DEDUCTType)getCovTerm("PIPMN_MED_DEDUCT");
  }
  
  public productmodel.OptionPIPMN_OTHERType getPIPMN_OTHERTerm() {
    return (productmodel.OptionPIPMN_OTHERType)getCovTerm("PIPMN_OTHER");
  }
  
  public productmodel.OptionPIPMN_OTH_DEDUCTType getPIPMN_OTH_DEDUCTTerm() {
    return (productmodel.OptionPIPMN_OTH_DEDUCTType)getCovTerm("PIPMN_OTH_DEDUCT");
  }
  
  public productmodel.OptionPIPMN_SERVICESType getPIPMN_SERVICESTerm() {
    return (productmodel.OptionPIPMN_SERVICESType)getCovTerm("PIPMN_SERVICES");
  }
  
  public productmodel.GenericPIPMN_STACKType getPIPMN_STACKTerm() {
    return (productmodel.GenericPIPMN_STACKType)getCovTerm("PIPMN_STACK");
  }
  
  public productmodel.OptionPIPMN_SURVIVORType getPIPMN_SURVIVORTerm() {
    return (productmodel.OptionPIPMN_SURVIVORType)getCovTerm("PIPMN_SURVIVOR");
  }
  
  public productmodel.OptionPIPMN_WORKType getPIPMN_WORKTerm() {
    return (productmodel.OptionPIPMN_WORKType)getCovTerm("PIPMN_WORK");
  }
  
  static {
    com.guidewire._generated.productmodel.CAPIP_MNInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.CAPIP_MN>() {
      public productmodel.CAPIP_MN newEmptyInstance() {
        return new productmodel.CAPIP_MN();
      }
      
      
    });
  }
}