package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GLLine/coveragepatterns/ClaimsMadeExtendedSpecificRpting.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class ClaimsMadeExtendedSpecificRpting extends entity.GeneralLiabilityCond {
  protected ClaimsMadeExtendedSpecificRpting()  {
    super((java.lang.Void)null);
  }
  
  public ClaimsMadeExtendedSpecificRpting(entity.PolicyPeriod branch)  {
    super(branch, "ClaimsMadeExtendedSpecificRpting");
  }
  
  public ClaimsMadeExtendedSpecificRpting(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "ClaimsMadeExtendedSpecificRpting");
  }
  
  public productmodel.GenericExtRptAccDateType getExtRptAccDateTerm() {
    return (productmodel.GenericExtRptAccDateType)getCovTerm("ExtRptAccDate");
  }
  
  public productmodel.GenericExtRptAccidentLocationType getExtRptAccidentLocationTerm() {
    return (productmodel.GenericExtRptAccidentLocationType)getCovTerm("ExtRptAccidentLocation");
  }
  
  public productmodel.GenericExtRptngAccidentDescriptionType getExtRptngAccidentDescriptionTerm() {
    return (productmodel.GenericExtRptngAccidentDescriptionType)getCovTerm("ExtRptngAccidentDescription");
  }
  
  public productmodel.GenericExtRptngLocationAddressType getExtRptngLocationAddressTerm() {
    return (productmodel.GenericExtRptngLocationAddressType)getCovTerm("ExtRptngLocationAddress");
  }
  
  public productmodel.GenericExtRptngLocationDescriptionType getExtRptngLocationDescriptionTerm() {
    return (productmodel.GenericExtRptngLocationDescriptionType)getCovTerm("ExtRptngLocationDescription");
  }
  
  public productmodel.GenericExtRptngLocationNameType getExtRptngLocationNameTerm() {
    return (productmodel.GenericExtRptngLocationNameType)getCovTerm("ExtRptngLocationName");
  }
  
  public productmodel.GenericExtRptngProductDateType getExtRptngProductDateTerm() {
    return (productmodel.GenericExtRptngProductDateType)getCovTerm("ExtRptngProductDate");
  }
  
  public productmodel.TypekeyExtRptngProductWorkDateTypeType getExtRptngProductWorkDateTypeTerm() {
    return (productmodel.TypekeyExtRptngProductWorkDateTypeType)getCovTerm("ExtRptngProductWorkDateType");
  }
  
  public productmodel.GenericExtRptngProductWorkDescriptionType getExtRptngProductWorkDescriptionTerm() {
    return (productmodel.GenericExtRptngProductWorkDescriptionType)getCovTerm("ExtRptngProductWorkDescription");
  }
  
  public productmodel.TypekeyExtendedRptTypeType getExtendedRptTypeTerm() {
    return (productmodel.TypekeyExtendedRptTypeType)getCovTerm("ExtendedRptType");
  }
  
  public boolean getHasExtRptAccDateTerm() {
    return hasCovTerm("ExtRptAccDate");
  }
  
  public boolean getHasExtRptAccidentLocationTerm() {
    return hasCovTerm("ExtRptAccidentLocation");
  }
  
  public boolean getHasExtRptngAccidentDescriptionTerm() {
    return hasCovTerm("ExtRptngAccidentDescription");
  }
  
  public boolean getHasExtRptngLocationAddressTerm() {
    return hasCovTerm("ExtRptngLocationAddress");
  }
  
  public boolean getHasExtRptngLocationDescriptionTerm() {
    return hasCovTerm("ExtRptngLocationDescription");
  }
  
  public boolean getHasExtRptngLocationNameTerm() {
    return hasCovTerm("ExtRptngLocationName");
  }
  
  public boolean getHasExtRptngProductDateTerm() {
    return hasCovTerm("ExtRptngProductDate");
  }
  
  public boolean getHasExtRptngProductWorkDateTypeTerm() {
    return hasCovTerm("ExtRptngProductWorkDateType");
  }
  
  public boolean getHasExtRptngProductWorkDescriptionTerm() {
    return hasCovTerm("ExtRptngProductWorkDescription");
  }
  
  public boolean getHasExtendedRptTypeTerm() {
    return hasCovTerm("ExtendedRptType");
  }
  
  static {
    com.guidewire._generated.productmodel.ClaimsMadeExtendedSpecificRptingInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.ClaimsMadeExtendedSpecificRpting>() {
      public productmodel.ClaimsMadeExtendedSpecificRpting newEmptyInstance() {
        return new productmodel.ClaimsMadeExtendedSpecificRpting();
      }
      
      
    });
  }
}