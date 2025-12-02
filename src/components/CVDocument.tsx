import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

// Register a standard font (Helvetica is built-in, but we can register others if needed)
// For now, we'll use Helvetica as it's clean and standard.

const styles = StyleSheet.create({
    page: {
        padding: 40,
        fontFamily: 'Helvetica',
        backgroundColor: '#FFFFFF',
    },
    header: {
        marginBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#1e293b', // slate-800
        paddingBottom: 10,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#1d4ed8', // blue-700
        marginBottom: 4,
        textTransform: 'uppercase',
    },
    title: {
        fontSize: 12,
        color: '#475569', // slate-600
        marginBottom: 8,
        fontWeight: 'bold',
    },
    contactRow: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        gap: 15,
        fontSize: 9,
        color: '#64748b', // slate-500
    },
    section: {
        marginBottom: 15,
    },
    sectionTitle: {
        fontSize: 11,
        fontWeight: 'bold',
        color: '#1e293b', // slate-800
        borderBottomWidth: 0.5,
        borderBottomColor: '#cbd5e1', // slate-300
        marginBottom: 8,
        paddingBottom: 2,
        textTransform: 'uppercase',
    },
    jobContainer: {
        marginBottom: 10,
    },
    jobHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 2,
    },
    jobTitle: {
        fontSize: 10,
        fontWeight: 'bold',
        color: '#0f172a', // slate-900
    },
    company: {
        fontSize: 10,
        color: '#1e293b', // slate-800
        fontStyle: 'italic',
    },
    date: {
        fontSize: 9,
        color: '#64748b', // slate-500
    },
    bulletPoint: {
        flexDirection: 'row',
        marginBottom: 2,
        paddingLeft: 5,
    },
    bullet: {
        width: 10,
        fontSize: 10,
        color: '#3b82f6', // blue-500
    },
    bulletText: {
        fontSize: 9,
        color: '#334155', // slate-700
        flex: 1,
        lineHeight: 1.4,
    },
    skillGroup: {
        marginBottom: 6,
    },
    skillTitle: {
        fontSize: 9,
        fontWeight: 'bold',
        color: '#1e293b', // slate-800
        marginBottom: 2,
    },
    skillText: {
        fontSize: 9,
        color: '#334155', // slate-700
        lineHeight: 1.4,
    },
    summaryText: {
        fontSize: 9,
        color: '#334155', // slate-700
        lineHeight: 1.4,
        marginBottom: 4,
    },
});

const CVDocument = () => (
    <Document>
        <Page size="A4" style={styles.page}>
            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.name}>Edgar Martínez</Text>
                <Text style={styles.title}>Marketing Materials Project Manager</Text>
                <View style={styles.contactRow}>
                    <Text>adrian_0698@hotmail.com</Text>
                </View>
            </View>

            {/* Summary */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Summary</Text>
                <Text style={styles.summaryText}>
                    Project manager with a strong background in digital transformation and data solutions, managing end-to-end production of POS marketing materials across digital and print channels for North America.
                </Text>
            </View>

            {/* Digital Transformation */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Digital Transformation Background</Text>
                <Text style={styles.summaryText}>
                    Driving digital transformation through data-driven insights and automation. Specialized in implementing comprehensive data solutions through Excel automations (Macros, Power Query) and Power BI dashboards. Expert in transforming business processes with automated workflows using Power Automate and Python APIs. Proven track record of leveraging AI and advanced analytics to optimize business operations.
                </Text>
            </View>

            {/* Experience */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Professional Experience</Text>

                {/* Job 1 */}
                <View style={styles.jobContainer}>
                    <View style={styles.jobHeader}>
                        <View>
                            <Text style={styles.jobTitle}>Marketing Materials Project Manager</Text>
                            <Text style={styles.company}>British American Tobacco | Accenture Acquisition</Text>
                        </View>
                        <Text style={styles.date}>Feb 2025 - Current</Text>
                    </View>
                    <View style={styles.bulletPoint}>
                        <Text style={styles.bullet}>•</Text>
                        <Text style={styles.bulletText}>Responsible for the execution of POS marketing materials for the operations field with over 300K stores in North America.</Text>
                    </View>
                    <View style={styles.bulletPoint}>
                        <Text style={styles.bullet}>•</Text>
                        <Text style={styles.bulletText}>Developed Power BI dashboards integrating Salesforce data to track field activity and material performance.</Text>
                    </View>
                    <View style={styles.bulletPoint}>
                        <Text style={styles.bullet}>•</Text>
                        <Text style={styles.bulletText}>Successfully managed over 20 POS campaigns with an average project value of $250,000 US dollars.</Text>
                    </View>
                    <View style={styles.bulletPoint}>
                        <Text style={styles.bullet}>•</Text>
                        <Text style={styles.bulletText}>Coordinating cross-functional teams with 6 different stakeholders.</Text>
                    </View>
                    <View style={styles.bulletPoint}>
                        <Text style={styles.bullet}>•</Text>
                        <Text style={styles.bulletText}>Managed timelines, asset approvals, and vendor deliverables while maintaining quality standards.</Text>
                    </View>
                </View>

                {/* Job 2 */}
                <View style={styles.jobContainer}>
                    <View style={styles.jobHeader}>
                        <View>
                            <Text style={styles.jobTitle}>Trade Marketing Operations Analyst</Text>
                            <Text style={styles.company}>British American Tobacco</Text>
                        </View>
                        <Text style={styles.date}>Oct 2023 - Jan 2025</Text>
                    </View>
                    <View style={styles.bulletPoint}>
                        <Text style={styles.bullet}>•</Text>
                        <Text style={styles.bulletText}>Work Alongside the Operations Field to Support Regional and Strategic Accounts in the US.</Text>
                    </View>
                    <View style={styles.bulletPoint}>
                        <Text style={styles.bullet}>•</Text>
                        <Text style={styles.bulletText}>Improve Internal and External Business Operation Performance.</Text>
                    </View>
                    <View style={styles.bulletPoint}>
                        <Text style={styles.bullet}>•</Text>
                        <Text style={styles.bulletText}>Data Analysis and Insights using Power BI and Power Query.</Text>
                    </View>
                    <View style={styles.bulletPoint}>
                        <Text style={styles.bullet}>•</Text>
                        <Text style={styles.bulletText}>Execution of Mass Material Orders for the field.</Text>
                    </View>
                    <View style={styles.bulletPoint}>
                        <Text style={styles.bullet}>•</Text>
                        <Text style={styles.bulletText}>Warehouse Account Management.</Text>
                    </View>
                </View>
            </View>

            {/* Skills */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Skills</Text>

                <View style={styles.skillGroup}>
                    <Text style={styles.skillTitle}>Digital Transformation & Data Analytics</Text>
                    <Text style={styles.skillText}>Artificial Intelligence (AI), Python, Power BI, Power Query, SQL, Data Analysis, Excel Automation</Text>
                </View>

                <View style={styles.skillGroup}>
                    <Text style={styles.skillTitle}>Business Tools & Platforms</Text>
                    <Text style={styles.skillText}>Salesforce, SAP, Project Management, Process Automation</Text>
                </View>

                <View style={styles.skillGroup}>
                    <Text style={styles.skillTitle}>Languages</Text>
                    <Text style={styles.skillText}>English (C2), Spanish (Native)</Text>
                </View>
            </View>
        </Page>
    </Document>
);

export default CVDocument;
