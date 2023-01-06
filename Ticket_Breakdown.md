# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here
1- Database changes for Customs Agent Ids
2- Saving data while assigning Agents to shifts/facilities.
3- Generate Reports on the basis of Custom Agent Ids


Details:
**#Ticket 1: Database Changes for Custom Agent Id**

Create Intermediate table for "ShiftAgents"
This table contains Shift_Id, Agent_Id,Facility_Id, Custom_Agent_Id.

**#Ticket 2: Saving data while assigning Agents to shifts/facilities**

When an agent is assigned to a shift, first get all the agents assigned to the particular Facility.
If the current agent already exists in that list then don't create new Custom_Agent_Id in this table.
Use already created Custom_Agent_Id and assigned it to the row created for this shift.

**#Ticket 3: Generate Reports on the basis of Custom Agent Ids**

While creating report for particular agent on the basis of the custom Id. Just send the Facility_ID and Custom_Agent_Id 

    ###### Guess: on the reports page, there is a drop down for facilities and on selection of a facility. It populates the agents drop down.
           Here Agents are associated with their Custom_Agent_Id, on selection of Agent, it will show the report of the agent.

